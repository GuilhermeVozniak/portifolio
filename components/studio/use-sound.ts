"use client";
import { useCallback, useEffect, useRef, useState } from "react";
export function useSound() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");
  const context = useRef<AudioContext | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    void context.current?.close();
    context.current = null;
    setPlaying(false);
  }, []);
  const toggle = useCallback(async () => {
    if (context.current) {
      stop();
      return;
    }
    try {
      const ac = new AudioContext();
      context.current = ac;
      await ac.resume();
      if (context.current !== ac) return;
      setPlaying(true);
      setError("");
      const master = ac.createGain();
      master.gain.value = 0.065;
      master.connect(ac.destination);
      [130.81, 164.81, 196, 261.63].forEach((frequency, i) => {
        const osc = ac.createOscillator(),
          gain = ac.createGain();
        osc.type = "sine";
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0, ac.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ac.currentTime + 0.4 + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 7);
        osc.connect(gain);
        gain.connect(master);
        osc.start();
        osc.stop(ac.currentTime + 7.1);
      });
      timer.current = setTimeout(stop, 7300);
    } catch {
      stop();
      setError("Sound is unavailable in this browser.");
    }
  }, [stop]);
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      document.removeEventListener("visibilitychange", hide);
      if (timer.current) clearTimeout(timer.current);
      void context.current?.close();
    };
  }, [stop]);
  return { playing, toggle, error };
}
