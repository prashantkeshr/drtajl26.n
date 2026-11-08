"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

// Simplified India outline — x=(lon-82.5)*0.14, y=(lat-22.5)*0.14
const INDIA_POINTS: [number, number][] = [
  [-2.02, 2.02], // Kashmir NW
  [-0.49, 1.61], // Kashmir NE ridge
  [0.77, 0.70],  // Nepal border
  [2.09, 0.74],  // Arunachal NE
  [1.40, -0.21], // Mizoram
  [0.63, -0.35], // Bengal coast north
  [0.21, -1.19], // Orissa/AP coast
  [-0.42, -1.75],// SE coast
  [-0.70, -2.03],// Cape Comorin
  [-0.84, -1.68],// Kerala south
  [-1.22, -0.98],// Goa
  [-1.36, -0.49],// Maharashtra
  [-1.39, -0.07],// Gujarat coast
  [-1.93, 0.07], // Gujarat tip (Kutch)
  [-1.61, 0.21], // Gujarat north
  [-1.82, 0.98], // Rajasthan
  [-1.19, 1.61], // Punjab
];

function IndiaMap() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005;
  });

  const shape = new THREE.Shape();
  INDIA_POINTS.forEach(([x, y], i) => {
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <extrudeGeometry args={[shape, { depth: 0.18, bevelEnabled: false }]} />
      <meshStandardMaterial color="#FF9933" metalness={0.3} roughness={0.55} transparent opacity={0.7} />
    </mesh>
  );
}

// 8 Indian cities: alternate gold / teal
const CITY_DOTS: { pos: [number, number, number]; color: string }[] = [
  { pos: [-0.74, 0.85, 0.22], color: "#C9A84C" },  // Delhi
  { pos: [-1.34, -0.48, 0.22], color: "#00D4AA" }, // Mumbai
  { pos: [-0.69, -1.34, 0.22], color: "#C9A84C" }, // Bengaluru
  { pos: [-0.31, -1.31, 0.22], color: "#00D4AA" }, // Chennai
  { pos: [0.83, 0.01, 0.22], color: "#C9A84C" },   // Kolkata
  { pos: [-0.56, -0.71, 0.22], color: "#00D4AA" }, // Hyderabad
  { pos: [-1.20, -0.56, 0.22], color: "#C9A84C" }, // Pune
  { pos: [-1.39, 0.07, 0.22], color: "#00D4AA" },  // Ahmedabad
];

function CityDots() {
  return (
    <>
      {CITY_DOTS.map(({ pos, color }, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
        </mesh>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 6]} intensity={1.6} color="#FF9933" />
      <pointLight position={[-4, -4, 4]} intensity={0.8} color="#C9A84C" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      <Environment preset="city" />

      <Stars radius={60} depth={30} count={1600} factor={2.2} saturation={0} fade speed={0.6} />

      {/* Saffron particle stream floating upward from map base */}
      <Sparkles count={60} scale={[5, 8, 3]} size={0.8} speed={0.4} color="#FF9933" opacity={0.65} />

      <IndiaMap />
      <CityDots />

      {/* City ambient glow */}
      <Sparkles count={24} scale={[4, 4, 1]} size={0.5} speed={0.3} color="#C9A84C" opacity={0.45} />
    </Canvas>
  );
}
