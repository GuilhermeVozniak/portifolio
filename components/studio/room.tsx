"use client";
import { useState } from "react";
import { Html } from "@react-three/drei";
import { Box, Disc, Keyboard, Rod, Screen, Speaker } from "./objects";
import type { ThreeEvent } from "@react-three/fiber";
export interface RoomProps {
  onDesktop: () => void;
  onServer: () => void;
  onSound: () => void;
  onStory: () => void;
}
function Hotspot({
  children,
  label,
  onClick,
  position,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  position: [number, number, number];
}) {
  const [hover, setHover] = useState(false);
  return (
    <group
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
      {hover && (
        <Html position={position} center style={{ pointerEvents: "none" }}>
          <span className="scene-tooltip">{label}</span>
        </Html>
      )}
    </group>
  );
}
export default function Room({
  onDesktop,
  onServer,
  onSound,
  onStory,
}: RoomProps) {
  return (
    <group position={[-0.35, 0, 0]}>
      {/* Cutaway room and window behind the actual workstation. */}
      <Box
        position={[0.3, -0.12, 0.05]}
        size={[6.7, 0.23, 4.3]}
        color="#b9b7a1"
        radius={0.06}
      />
      {Array.from({ length: 110 }, (_, i) => (
        <Box
          key={i}
          position={[
            -2.9 + ((i * 1.731) % 6.35),
            0.004,
            -1.95 + ((i * 2.319) % 4),
          ]}
          rotation={[0, i * 1.24, 0]}
          size={[0.055 + (i % 3) * 0.016, 0.004, 0.035]}
          color={i % 3 === 0 ? "#e1ddc9" : "#999c88"}
          radius={0}
        />
      ))}
      <Box
        position={[-2.99, 1.65, -0.17]}
        size={[0.12, 3.3, 3.84]}
        color="#d2d4c2"
      />
      <Box
        position={[0.3, 0.56, -1.99]}
        size={[6.7, 1.12, 0.12]}
        color="#daddcc"
      />
      <Box
        position={[-2.06, 2.19, -1.99]}
        size={[1.76, 2.14, 0.12]}
        color="#daddcc"
      />
      <Box
        position={[2.55, 2.19, -1.99]}
        size={[2.1, 2.14, 0.12]}
        color="#daddcc"
      />
      <Box
        position={[0.17, 3.2, -1.99]}
        size={[2.77, 0.15, 0.13]}
        color="#daddcc"
      />
      <Box
        position={[0.17, 2.1, -2.02]}
        size={[2.72, 2.08, 0.045]}
        color="#cedead"
      />
      <mesh position={[0.17, 2.1, -1.988]}>
        <planeGeometry args={[2.59, 1.94]} />
        <meshBasicMaterial color="#eaf4cc" />
      </mesh>
      {[-1.16, 0.18, 1.51].map((x) => (
        <Box
          key={x}
          position={[x, 2.13, -1.9]}
          size={[0.065, 2.17, 0.16]}
          color="#f2f0df"
        />
      ))}
      {[1.08, 3.19].map((y) => (
        <Box
          key={y}
          position={[0.18, y, -1.89]}
          size={[2.78, 0.075, 0.19]}
          color="#efedde"
        />
      ))}
      <Box
        position={[0.18, 1.05, -1.82]}
        size={[2.92, 0.09, 0.4]}
        color="#ececda"
      />
      {/* Standing desk, felt pad and controls. */}
      <Box position={[0, 1.16, 0]} size={[3.92, 0.13, 1.62]} color="#92694b" />
      <Box
        position={[-0.17, 1.233, 0.005]}
        size={[3.4, 0.016, 1.51]}
        color="#4b5047"
      />
      {[-1.55, 1.5].map((x) => (
        <group key={x}>
          <Box
            position={[x, 0.58, 0]}
            size={[0.105, 1.12, 0.13]}
            color="#262e28"
          />
          <Box
            position={[x, 0.06, 0.06]}
            size={[0.15, 0.075, 1.22]}
            color="#262e28"
          />
        </group>
      ))}
      <Box
        position={[0, 0.95, -0.25]}
        size={[3.14, 0.08, 0.09]}
        color="#242a24"
      />
      <Box
        position={[1.56, 1.08, 0.75]}
        size={[0.4, 0.095, 0.12]}
        color="#252e27"
      />
      {[1.43, 1.51, 1.59, 1.67].map((x) => (
        <Box
          key={x}
          position={[x, 1.09, 0.815]}
          size={[0.028, 0.02, 0.005]}
          color="#a3b38e"
        />
      ))}
      {/* Landscape + portrait, deliberately unequal top edges. */}
      <Hotspot
        label="Open my desktop"
        onClick={onDesktop}
        position={[-0.55, 2.82, -0.45]}
      >
        <Box
          position={[-0.58, 2.14, -0.51]}
          size={[2.12, 1.22, 0.09]}
          color="#222a24"
        />
        <Screen position={[-0.58, 2.14, -0.46]} size={[2.035, 1.135]} />
        <Box
          position={[-0.58, 1.55, -0.57]}
          size={[0.085, 0.55, 0.1]}
          color="#333e34"
        />
        <Box
          position={[-0.58, 1.27, -0.47]}
          size={[0.65, 0.035, 0.33]}
          color="#3a463b"
        />
        <Box
          position={[-0.58, 2.798, -0.46]}
          size={[0.87, 0.053, 0.075]}
          color="#30372d"
        />
        <mesh position={[-0.58, 2.772, -0.421]}>
          <boxGeometry args={[0.78, 0.013, 0.019]} />
          <meshBasicMaterial color="#ffb55b" />
        </mesh>
      </Hotspot>
      <Box
        position={[0.99, 2.41, -0.53]}
        size={[0.85, 1.83, 0.085]}
        color="#232b24"
        rotation={[0, -0.08, 0]}
      />
      <group position={[0.99, 2.41, -0.478]} rotation={[0, -0.08, 0]}>
        <Screen position={[0, 0, 0]} size={[0.775, 1.74]} kind="portrait" />
      </group>
      <Box
        position={[0.99, 1.47, -0.61]}
        size={[0.065, 0.47, 0.07]}
        color="#454f43"
      />
      <Box
        position={[0.99, 1.27, -0.53]}
        size={[0.42, 0.035, 0.33]}
        color="#8f978a"
      />
      {/* Laptop and external keyboard. */}
      <Hotspot
        label="The idea that started it"
        onClick={onStory}
        position={[-0.38, 1.91, 0.27]}
      >
        <Box
          position={[-0.38, 1.285, 0.24]}
          size={[1.04, 0.045, 0.7]}
          color="#adb2a8"
        />
        <group position={[-0.38, 1.58, -0.065]} rotation={[-0.15, 0, 0]}>
          <Box size={[1.03, 0.62, 0.035]} color="#9ea89b" />
          <Screen
            position={[0, 0.005, 0.019]}
            size={[0.974, 0.556]}
            kind="code"
          />
        </group>
        <Keyboard position={[-0.38, 1.315, 0.16]} scale={0.91} />
        <Box
          position={[-0.38, 1.314, 0.43]}
          size={[0.32, 0.005, 0.18]}
          color="#bac0b4"
        />
      </Hotspot>
      <Keyboard position={[-0.44, 1.28, 0.65]} scale={0.9} />
      <Box
        position={[0.47, 1.28, 0.4]}
        size={[0.27, 0.025, 0.3]}
        color="#2d342e"
      />
      <Box
        position={[0.47, 1.322, 0.4]}
        size={[0.13, 0.063, 0.21]}
        color="#929b89"
        radius={0.05}
      />
      <Hotspot
        label="Play a little sound experiment"
        onClick={onSound}
        position={[-1.45, 1.96, -0.24]}
      >
        <Speaker position={[-1.46, 1.49, -0.29]} />
        <Speaker position={[0.46, 1.49, -0.35]} />
      </Hotspot>
      <Box
        position={[-1.44, 1.77, -0.31]}
        size={[0.4, 0.09, 0.23]}
        color="#a85030"
      />
      {[-1.55, -1.44, -1.33].map((x) => (
        <Disc
          key={x}
          position={[x, 1.77, -0.186]}
          radius={0.02}
          color="#262e27"
        />
      ))}
      {/* Books and headphones. */}
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          position={[-1.72, 1.27 + i * 0.075, 0.06]}
          size={[0.4, 0.06, 0.49]}
          rotation={[0, i * 0.12, 0]}
          color={["#d3bb76", "#354b3c", "#b85b36"][i]}
        />
      ))}
      <mesh position={[-1.55, 1.48, 0.44]} rotation={[Math.PI / 2, 0.3, 0]}>
        <torusGeometry args={[0.19, 0.027, 8, 24, Math.PI * 1.5]} />
        <meshStandardMaterial color="#20251e" />
      </mesh>
      {[-1.75, -1.38].map((x) => (
        <Box
          key={x}
          position={[x, 1.31, 0.44]}
          size={[0.095, 0.1, 0.19]}
          color="#20251e"
          radius={0.04}
        />
      ))}
      {/* Boom microphone: the defining foreground diagonal. */}
      <Rod a={[-1.9, 1.19, 0.55]} b={[-1.9, 1.62, 0.55]} radius={0.033} />
      <Rod a={[-1.9, 1.62, 0.55]} b={[-0.95, 1.64, 0.73]} radius={0.029} />
      <Rod a={[-0.95, 1.64, 0.73]} b={[-0.1, 1.65, 0.38]} radius={0.025} />
      <Rod a={[-1.9, 1.57, 0.55]} b={[-0.95, 1.59, 0.73]} radius={0.009} />
      <Rod a={[-0.95, 1.59, 0.73]} b={[-0.1, 1.6, 0.38]} radius={0.009} />
      <Box
        position={[-0.05, 1.65, 0.39]}
        size={[0.3, 0.1, 0.1]}
        color="#202820"
        radius={0.04}
      />
      <Disc
        position={[-0.16, 1.65, 0.51]}
        radius={0.14}
        depth={0.015}
        color="#2b3329"
      />
      {/* Compact computer and upright console. */}
      <Box
        position={[1.15, 1.32, 0.02]}
        size={[0.31, 0.12, 0.3]}
        color="#c6cbbf"
      />
      <Box
        position={[1.74, 1.62, -0.3]}
        size={[0.22, 0.73, 0.36]}
        color="#ececd9"
      />
      <Disc position={[1.74, 1.77, -0.108]} radius={0.052} color="#353d30" />
      {/* Separate wooden server cabinet, with open frame and cables. */}
      <Box
        position={[2.65, 0.63, -0.14]}
        size={[1.2, 1.23, 1.16]}
        color="#a67346"
      />
      {[0.24, 0.56, 0.89].map((y) => (
        <group key={y}>
          <Box
            position={[2.65, y, 0.45]}
            size={[1.12, 0.28, 0.045]}
            color="#b98452"
          />
          <Disc position={[2.65, y, 0.49]} radius={0.028} color="#805c3e" />
        </group>
      ))}
      <Hotspot
        label="Explore the hardware side"
        onClick={onServer}
        position={[2.63, 2.1, -0.14]}
      >
        <Box
          position={[2.58, 1.29, -0.23]}
          size={[0.65, 0.055, 0.68]}
          color="#a4aaa0"
        />
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            position={[2.58, 1.37 + i * 0.15, -0.23]}
            size={[0.5, 0.11, 0.56]}
            color={i === 2 ? "#355e3d" : "#434b40"}
          />
        ))}
        {[2.28, 2.87].map((x) =>
          [-0.51, 0.05].map((z) => (
            <Rod
              key={`${x}-${z}`}
              a={[x, 1.31, z]}
              b={[x, 1.91, z]}
              radius={0.017}
              color="#d2bf7d"
            />
          )),
        )}
        <Box
          position={[2.58, 1.91, -0.23]}
          size={[0.63, 0.04, 0.64]}
          color="#323f32"
        />
        <Disc
          position={[2.58, 1.94, -0.23]}
          radius={0.21}
          color="#131f18"
          rotation={[0, 0, 0]}
        />
        <Disc
          position={[2.58, 1.96, -0.23]}
          radius={0.07}
          color="#a5ad90"
          rotation={[0, 0, 0]}
        />
        {Array.from({ length: 7 }, (_, i) => (
          <Box
            key={i}
            position={[
              2.58 + Math.cos(i) * 0.13,
              1.96,
              -0.23 + Math.sin(i) * 0.13,
            ]}
            size={[0.12, 0.008, 0.055]}
            rotation={[0, -i, 0]}
            color="#69795e"
          />
        ))}
        <mesh position={[2.3, 1.69, 0.06]}>
          <sphereGeometry args={[0.021, 10, 10]} />
          <meshBasicMaterial color="#b6ff00" />
        </mesh>
        <Rod
          a={[2.38, 1.65, 0.07]}
          b={[2.46, 1.33, 0.16]}
          color="#ef683e"
          radius={0.009}
        />
        <Rod
          a={[2.55, 1.65, 0.07]}
          b={[2.65, 1.32, 0.16]}
          color="#eab34c"
          radius={0.009}
        />
      </Hotspot>
      <mesh position={[3.01, 1.27, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.13, 0.012, 6, 32]} />
        <meshStandardMaterial color="#477a93" />
      </mesh>
      {/* Chair: angled out so it does not obscure the equipment. */}
      <group position={[-1.15, 0, 1.4]} rotation={[0, 0.25, 0]}>
        <Box
          position={[0, 0.61, 0]}
          size={[0.77, 0.13, 0.68]}
          color="#29332a"
          radius={0.09}
        />
        <Box
          position={[0, 1.1, 0.31]}
          size={[0.74, 0.9, 0.1]}
          color="#263126"
          radius={0.08}
        />
        <Rod a={[0, 0.1, 0]} b={[0, 0.6, 0]} radius={0.055} color="#535c4e" />
        {Array.from({ length: 5 }, (_, i) => (
          <group key={i}>
            <Rod
              a={[0, 0.13, 0]}
              b={[Math.cos(i * 1.257) * 0.49, 0.07, Math.sin(i * 1.257) * 0.49]}
              radius={0.026}
            />
            <Disc
              position={[
                Math.cos(i * 1.257) * 0.49,
                0.055,
                Math.sin(i * 1.257) * 0.49,
              ]}
              radius={0.048}
              depth={0.06}
            />
          </group>
        ))}
        {[-0.46, 0.46].map((x) => (
          <group key={x}>
            <Rod a={[x, 0.57, 0.08]} b={[x, 0.93, 0.08]} radius={0.023} />
            <Box
              position={[x, 0.95, -0.06]}
              size={[0.1, 0.055, 0.4]}
              color="#263126"
            />
          </group>
        ))}
      </group>
      {/* Abstract wall print, no private photographs. */}
      <Box
        position={[-2.08, 2.41, -1.87]}
        size={[0.59, 0.78, 0.045]}
        color="#9f754d"
      />
      <Box
        position={[-2.08, 2.41, -1.84]}
        size={[0.51, 0.7, 0.008]}
        color="#ece3c7"
      />
      <Box
        position={[-2.13, 2.44, -1.828]}
        size={[0.13, 0.42, 0.006]}
        color="#ff713e"
      />
      <Box
        position={[-1.99, 2.34, -1.823]}
        size={[0.13, 0.32, 0.006]}
        color="#657e50"
      />
    </group>
  );
}
