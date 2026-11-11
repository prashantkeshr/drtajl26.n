"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ─── Orbital ring with particles orbiting along it ─────────────── */
interface RingProps {
  tiltX: number;
  tiltZ: number;
  color: string;
  radius: number;
  speed: number;
  particles: number;
  tubeR: number;
  opacity: number;
}

function OrbitalRing({ tiltX, tiltZ, color, radius, speed, particles, tubeR, opacity }: RingProps) {
  const spinRef = useRef<THREE.Group>(null);

  const positions = useMemo(
    () =>
      Array.from({ length: particles }, (_, i) => {
        const a = (i / particles) * Math.PI * 2;
        return [Math.cos(a) * radius, 0, Math.sin(a) * radius] as [number, number, number];
      }),
    [particles, radius]
  );

  useFrame((_, dt) => {
    if (spinRef.current) spinRef.current.rotation.y += dt * speed;
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <group ref={spinRef}>
        {/* Ring backbone */}
        <mesh>
          <torusGeometry args={[radius, tubeR, 6, 160]} />
          <meshBasicMaterial color={color} transparent opacity={opacity} />
        </mesh>
        {/* Glowing particles */}
        {positions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.027, 10, 10]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={5.5}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ─── Central pulsing gold orb ───────────────────────────────────── */
function CoreOrb() {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.emissiveIntensity =
        1.1 + Math.sin(clock.getElapsedTime() * 0.65) * 0.22;
    }
  });

  return (
    <>
      {/* Core metallic sphere */}
      <mesh>
        <sphereGeometry args={[0.9, 72, 72]} />
        <meshStandardMaterial
          ref={matRef}
          color="#C9A84C"
          emissive="#D06818"
          emissiveIntensity={1.3}
          metalness={0.72}
          roughness={0.14}
          toneMapped={false}
        />
      </mesh>
      {/* Inner atmosphere */}
      <mesh>
        <sphereGeometry args={[1.28, 32, 32]} />
        <meshBasicMaterial
          color="#FF9933"
          transparent
          opacity={0.038}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Outer diffuse glow shell */}
      <mesh>
        <sphereGeometry args={[1.72, 32, 32]} />
        <meshBasicMaterial
          color="#C9A84C"
          transparent
          opacity={0.014}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

/* ─── Ambient gold dust field ────────────────────────────────────── */
function GoldDust() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 320;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#C9A84C"
        size={0.022}
        transparent
        opacity={0.38}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Full scene composition ─────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.06} />
      <pointLight position={[4, 5, 4]}   intensity={9} color="#FF9933" />
      <pointLight position={[-4, -3, 3]} intensity={4} color="#C9A84C" />
      <pointLight position={[0, -5, -2]} intensity={2} color="#00D4AA" />

      {/* Shift entire orb assembly to right half of viewport */}
      <group position={[2.2, 0, 0]}>
        <CoreOrb />

        {/* Saffron ring — prominent tilt */}
        <OrbitalRing
          tiltX={Math.PI / 6}
          tiltZ={0}
          color="#FF9933"
          radius={2.1}
          speed={0.26}
          particles={8}
          tubeR={0.007}
          opacity={0.3}
        />
        {/* Gold ring — counter-rotate, offset lean */}
        <OrbitalRing
          tiltX={-Math.PI / 3.5}
          tiltZ={Math.PI / 5}
          color="#C9A84C"
          radius={2.56}
          speed={-0.17}
          particles={6}
          tubeR={0.005}
          opacity={0.22}
        />
        {/* Light gold ring — near-equatorial */}
        <OrbitalRing
          tiltX={Math.PI / 2.2}
          tiltZ={Math.PI / 4}
          color="#E8D5A3"
          radius={2.98}
          speed={0.12}
          particles={5}
          tubeR={0.004}
          opacity={0.14}
        />

        <GoldDust />
      </group>

      <EffectComposer>
        <Bloom
          intensity={1.0}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9.5], fov: 46 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
