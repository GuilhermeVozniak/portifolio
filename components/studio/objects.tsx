"use client";
import { useEffect, useMemo } from "react";
import { CanvasTexture, SRGBColorSpace, Vector3, Quaternion } from "three";
import { RoundedBox } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
export function Box({
  position = [0, 0, 0],
  size,
  color,
  radius = 0.02,
  ...props
}: {
  position?: [number, number, number];
  size: [number, number, number];
  color: string;
  radius?: number;
} & Omit<ThreeElements["group"], "position">) {
  return (
    <group position={position} {...props}>
      <RoundedBox
        args={size}
        radius={Math.min(radius, ...size.map((n) => n / 3))}
        smoothness={2}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={color} roughness={0.68} />
      </RoundedBox>
    </group>
  );
}
export function Rod({
  a,
  b,
  radius = 0.018,
  color = "#252924",
}: {
  a: [number, number, number];
  b: [number, number, number];
  radius?: number;
  color?: string;
}) {
  const start = new Vector3(...a),
    end = new Vector3(...b),
    direction = end.clone().sub(start);
  return (
    <mesh
      position={start.add(end).multiplyScalar(0.5)}
      quaternion={new Quaternion().setFromUnitVectors(
        new Vector3(0, 1, 0),
        direction.clone().normalize(),
      )}
      castShadow
    >
      <cylinderGeometry args={[radius, radius, direction.length(), 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
export function Disc({
  position,
  radius = 0.08,
  depth = 0.02,
  color = "#171c17",
  rotation = [Math.PI / 2, 0, 0],
}: {
  position: [number, number, number];
  radius?: number;
  depth?: number;
  color?: string;
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <cylinderGeometry args={[radius, radius, depth, 32]} />
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.2} />
    </mesh>
  );
}
export function Screen({
  position,
  size,
  kind = "desktop",
}: {
  position: [number, number, number];
  size: [number, number];
  kind?: "desktop" | "portrait" | "code" | "server";
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = kind === "portrait" ? 400 : 960;
    canvas.height = kind === "portrait" ? 900 : 540;
    const c = canvas.getContext("2d")!;
    const w = canvas.width,
      h = canvas.height;
    c.fillStyle = "#171e18";
    c.fillRect(0, 0, w, h);
    if (kind === "desktop") {
      c.fillStyle = "#b6ff00";
      c.beginPath();
      c.arc(w * 0.82, h * 0.7, h * 0.6, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = "#303e28";
      c.lineWidth = 3;
      for (let i = 0; i < 6; i++) {
        c.beginPath();
        c.arc(w * 0.82, h * 0.7, 80 + i * 35, 0, Math.PI * 2);
        c.stroke();
      }
      c.fillStyle = "#e7ebdc";
      c.font = "bold 77px sans-serif";
      c.fillText("MAKE YOURSELF", 48, 180);
      c.fillText("AT HOME.", 48, 268);
      c.font = "23px monospace";
      c.fillText("Guilherme’s little corner of the internet", 48, 323);
      c.fillStyle = "#f8f8ed";
      c.font = "20px monospace";
      c.fillText("gv / studio", 24, 34);
      c.fillText("Explore my work ↗", 48, 450);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = ["#b6ff00", "#c9e3b6", "#b6ff00", "#a5c887", "#86b897"][
          i
        ];
        c.fillRect(315 + i * 63, 475, 44, 40);
      }
    } else if (kind === "portrait") {
      c.fillStyle = "#b6ff00";
      c.beginPath();
      c.arc(200, 370, 146, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = "#171e18";
      c.beginPath();
      c.arc(237, 330, 126, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = "#b6ff00";
      c.lineWidth = 2;
      for (let i = 0; i < 9; i++) {
        c.beginPath();
        c.ellipse(200, 420, 60 + i * 10, 160 + i * 16, 0.4, 0, Math.PI * 2);
        c.stroke();
      }
      c.fillStyle = "#f0f3dc";
      c.font = "bold 54px sans-serif";
      c.fillText("STAY", 38, 740);
      c.fillText("CURIOUS.", 38, 800);
      c.font = "19px monospace";
      c.fillText("ideas → things", 40, 66);
    } else if (kind === "code") {
      c.fillStyle = "#3c493b";
      c.fillRect(0, 0, w, 46);
      c.fillStyle = "#c8d6ba";
      c.font = "22px monospace";
      c.fillText("first-computer.html", 30, 32);
      const lines = [
        "<html>",
        "  <head>",
        "    <title>A childhood idea</title>",
        "  </head>",
        "  <body>",
        '    <computer src="windows.exe" />',
        "    <!-- what if it worked? -->",
        "  </body>",
        "</html>",
      ];
      lines.forEach((line, i) => {
        c.fillStyle = i === 5 ? "#b6ff00" : "#a7b5a6";
        c.fillText(line, 34, 100 + i * 42);
      });
    } else {
      c.fillStyle = "#b6ff00";
      c.font = "72px monospace";
      c.fillText("hello, world", 40, 230);
      c.font = "40px monospace";
      c.fillText("hardware / software", 40, 330);
    }
    const t = new CanvasTexture(canvas);
    t.colorSpace = SRGBColorSpace;
    return t;
  }, [kind]);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
export function Keyboard({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <Box size={[0.95, 0.035, 0.33]} color="#babeb7" />
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 14 }, (_, col) => (
          <Box
            key={`${row}-${col}`}
            position={[-0.425 + col * 0.065, 0.025, -0.126 + row * 0.059]}
            size={[0.052, 0.012, 0.043]}
            radius={0.004}
            color={row === 4 && col > 3 && col < 9 ? "#d6d9d1" : "#eeeede"}
          />
        )),
      )}
    </group>
  );
}
export function Speaker({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Box size={[0.37, 0.47, 0.31]} color="#202620" />
      <Disc position={[0, -0.06, 0.165]} radius={0.123} color="#070c09" />
      <Disc position={[0, -0.06, 0.18]} radius={0.071} color="#41483b" />
      <Disc position={[0, 0.14, 0.17]} radius={0.04} color="#787e62" />
      <mesh position={[0.12, -0.19, 0.163]}>
        <sphereGeometry args={[0.009, 8, 8]} />
        <meshBasicMaterial color="#b6ff00" />
      </mesh>
    </group>
  );
}
