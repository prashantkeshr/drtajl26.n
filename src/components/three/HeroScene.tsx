"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

function CoreGem() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.08;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y += delta * 0.25;
      wireRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial
          color="#C9A84C"
          metalness={0.85}
          roughness={0.08}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh ref={wireRef} scale={[1.03, 1.03, 1.03]}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial color="#FF9933" wireframe transparent opacity={0.22} />
      </mesh>
    </>
  );
}

const ORBITERS: { angle: number; radius: number; speed: number; size: number; color: string; yOff: number }[] = [
  { angle: 0,              radius: 3.5, speed: 0.4,   size: 0.32, color: "#FF9933", yOff: 0.3  },
  { angle: Math.PI * 0.4,  radius: 3.8, speed: -0.3,  size: 0.22, color: "#C9A84C", yOff: -0.4 },
  { angle: Math.PI * 0.75, radius: 3.2, speed: 0.5,   size: 0.28, color: "#00D4AA", yOff: 0.2  },
  { angle: Math.PI * 1.1,  radius: 3.6, speed: -0.42, size: 0.20, color: "#FF9933", yOff: 0.5  },
  { angle: Math.PI * 1.5,  radius: 3.9, speed: 0.35,  size: 0.26, color: "#C9A84C", yOff: -0.2 },
  { angle: Math.PI * 1.8,  radius: 3.3, speed: -0.48, size: 0.18, color: "#00D4AA", yOff: 0.1  },
];

function Orbiters() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ORBITERS.forEach(({ angle, radius, speed, yOff }, i) => {
      const m = refs.current[i];
      if (!m) return;
      const a = angle + t * speed;
      m.position.set(
        Math.cos(a) * radius,
        yOff + Math.sin(t * 0.4 + i) * 0.3,
        Math.sin(a) * radius
      );
      m.rotation.y += 0.03;
      m.rotation.x += 0.01;
    });
  });

  return (
    <>
      {ORBITERS.map(({ size, color }, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <octahedronGeometry args={[size, 0]} />
          <meshStandardMaterial
            color={color}
            metalness={0.6}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]}   intensity={2.2} color="#FF9933" />
      <pointLight position={[-4, -4, 4]} intensity={1.0} color="#C9A84C" />
      <pointLight position={[0, 2, 7]}   intensity={0.6} color="#ffffff" />

      <Stars radius={60} depth={30} count={1600} factor={2.2} saturation={0} fade speed={0.6} />
      <Sparkles count={70} scale={[8, 8, 4]} size={0.9} speed={0.35} color="#FF9933" opacity={0.5} />
      <Sparkles count={30} scale={[6, 6, 2]} size={0.6} speed={0.25} color="#C9A84C" opacity={0.4} />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <CoreGem />
      </Float>
      <Orbiters />
    </Canvas>
  );
}
