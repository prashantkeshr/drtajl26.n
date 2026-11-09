"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const NODES = 14;
const HELIX_R = 1.9;
const HELIX_H = 5.4;
const ORB_R = 0.27;

function HelixCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
    }
  });

  const { nodes, s0, s1 } = useMemo(() => {
    const nodes: { x: number; y: number; z: number; strand: number }[] = [];

    for (let s = 0; s < 2; s++) {
      for (let i = 0; i < NODES; i++) {
        const t = i / (NODES - 1);
        const theta = t * Math.PI * 4 + s * Math.PI;
        const y = (t - 0.5) * HELIX_H;
        nodes.push({
          x: HELIX_R * Math.cos(theta),
          y,
          z: HELIX_R * Math.sin(theta),
          strand: s,
        });
      }
    }

    const s0: [number, number, number][] = nodes
      .filter((n) => n.strand === 0)
      .map((n) => [n.x, n.y, n.z]);
    const s1: [number, number, number][] = nodes
      .filter((n) => n.strand === 1)
      .map((n) => [n.x, n.y, n.z]);

    return { nodes, s0, s1 };
  }, []);

  return (
    <group ref={groupRef} rotation={[0.2, 0, 0]}>
      {/* Strand backbones */}
      <Line points={s0} color="#FF5500" lineWidth={1.2} transparent opacity={0.55} />
      <Line points={s1} color="#00FFD0" lineWidth={1.2} transparent opacity={0.55} />

      {/* Crosslinks */}
      {Array.from({ length: NODES }, (_, i) => {
        const a = nodes[i];
        const b = nodes[NODES + i];
        return (
          <Line
            key={i}
            points={[
              [a.x, a.y, a.z],
              [b.x, b.y, b.z],
            ]}
            color="#6688bb"
            lineWidth={0.5}
            transparent
            opacity={0.22}
          />
        );
      })}

      {/* Glowing orbs */}
      {nodes.map((n, i) => (
        <mesh key={i} position={[n.x, n.y, n.z]}>
          <sphereGeometry args={[ORB_R, 22, 22]} />
          <meshStandardMaterial
            color={n.strand === 0 ? "#FF5500" : "#00FFD0"}
            emissive={n.strand === 0 ? "#FF5500" : "#00FFD0"}
            emissiveIntensity={4.5}
            metalness={0.0}
            roughness={0.3}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 48 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 6, 4]} intensity={5} color="#FF5500" />
      <pointLight position={[-5, -6, 4]} intensity={5} color="#00FFD0" />

      <Stars
        radius={90}
        depth={45}
        count={2500}
        factor={2.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <HelixCore />

      <EffectComposer>
        <Bloom
          intensity={2.2}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.85}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
