"use client";
import { StudioFallback } from "./fallback";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, PCFShadowMap } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Room, { type RoomProps } from "./room";
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <StudioFallback /> : this.props.children;
  }
}
function Rig({
  entering,
  reducedMotion,
  resetKey,
}: {
  entering: boolean;
  reducedMotion: boolean;
  resetKey: number;
}) {
  const controls = useRef<OrbitControlsImpl>(null);
  const { camera, invalidate, size } = useThree();
  const fitScale = Math.max(1, 1.15 / (size.width / size.height));
  useEffect(() => {
    camera.position.set(6.2 * fitScale, 1.4 + 3.1 * fitScale, 7.4 * fitScale);
    camera.lookAt(0.05, 1.4, 0);
    if (controls.current) {
      controls.current.target.set(0.05, 1.4, 0);
      controls.current.update();
    }
    invalidate();
  }, [resetKey, camera, invalidate, fitScale]);
  useFrame((_, delta) => {
    if (!entering || reducedMotion) return;
    camera.position.lerp(new Vector3(-0.9, 2.12, 1.8), Math.min(1, delta * 6));
    controls.current?.target.lerp(
      new Vector3(-0.9, 2.12, -0.5),
      Math.min(1, delta * 6),
    );
    controls.current?.update();
    invalidate();
  });
  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enabled={!entering}
      enablePan={false}
      enableDamping={!reducedMotion}
      minDistance={entering ? 1.2 : 5.3}
      maxDistance={Math.max(12, 11 * fitScale)}
      minPolarAngle={0.7}
      maxPolarAngle={1.38}
      minAzimuthAngle={-0.7}
      maxAzimuthAngle={1.05}
      target={[0.05, 1.4, 0]}
    />
  );
}
function StudioCanvas(
  props: RoomProps & {
    entering: boolean;
    reducedMotion: boolean;
    resetKey: number;
  },
) {
  const [visible, setVisible] = useState(true);
  const [lost, setLost] = useState(false);
  const [compact, setCompact] = useState(
    () => matchMedia("(max-width: 760px), (pointer: coarse)").matches,
  );
  useEffect(() => {
    const query = matchMedia("(max-width: 760px), (pointer: coarse)");
    const update = () => setCompact(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const change = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", change);
    return () => document.removeEventListener("visibilitychange", change);
  }, []);
  if (lost) return <StudioFallback />;
  return (
    <Canvas
      shadows={{ type: PCFShadowMap }}
      camera={{ position: [6.2, 4.5, 7.4], fov: 34 }}
      dpr={compact ? 1 : [1, 1.5]}
      frameloop={visible ? "demand" : "never"}
      fallback={<StudioFallback />}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          () => setLost(true),
          { once: true },
        );
      }}
    >
      <ambientLight intensity={1.5} />
      <hemisphereLight args={["#e9f6cf", "#687850", 1.3]} />
      <directionalLight
        position={[-3, 7, 5]}
        intensity={3.3}
        color="#fff1ce"
        castShadow
        shadow-mapSize={compact ? [512, 512] : [1024, 1024]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-normalBias={0.035}
      />
      <directionalLight position={[5, 4, -2]} intensity={1.1} color="#d3fa9c" />
      <Room {...props} />
      <Rig
        entering={props.entering}
        reducedMotion={props.reducedMotion}
        resetKey={props.resetKey}
      />
    </Canvas>
  );
}
export default function Scene(
  props: RoomProps & {
    entering: boolean;
    reducedMotion: boolean;
    resetKey: number;
  },
) {
  return (
    <SceneBoundary>
      <StudioCanvas {...props} />
    </SceneBoundary>
  );
}
