"use client";


import { useRef } from "react";

import { useRef, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, Icosahedron, Cylinder } from "@react-three/drei";
import * as THREE from "three";

function ShieldWall() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Hexagonal Shield Plate */}
      <Icosahedron ref={meshRef} args={[2, 1]} scale={[1.2, 1.5, 0.2]}>
        <meshStandardMaterial
          color="#00ff9c"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00ff9c"
          emissiveIntensity={0.5}
        />
      </Icosahedron>
      
      {/* Inner Glowing Core */}
      <Icosahedron args={[1, 2]} scale={[0.8, 1, 0.1]}>
        <MeshDistortMaterial
          color="#00ff9c"
          speed={3}
          distort={0.2}
          emissive="#00ff9c"
          emissiveIntensity={1}
        />
      </Icosahedron>

      {/* Vertical Security Pillars */}
      {[1.5, -1.5].map((x, i) => (
        <Cylinder key={i} args={[0.05, 0.05, 4, 8]} position={[x, 0, -0.2]}>
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </Cylinder>
      ))}
    </group>
  );
}

function DataStream({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y -= 0.05;
      if (ref.current.position.y < -4) ref.current.position.y = 4;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.02, 0.5, 0.02]} />
      <meshBasicMaterial color="#00ff9c" transparent opacity={0.4} />
    </mesh>
  );
}

export default function CyberGlobe() {

  const gridRef = useRef<THREE.GridHelper>(null);

  useEffect(() => {
    if (gridRef.current) {
      const material = gridRef.current.material as THREE.LineBasicMaterial;
      material.transparent = true;
      material.opacity = 0.05;
    }
  }, []);


  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ff9c" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ShieldWall />
        </Float>

        {/* Binary-like data streams */}
        <DataStream position={[-2.5, 2, -1]} />
        <DataStream position={[2.5, -1, -1]} />
        <DataStream position={[-3, 0, -1]} />
        <DataStream position={[3, 3, -1]} />

        <gridHelper args={[40, 20, "#00ff9c", "#020617"]} position={[0, -3.5, 0]} opacity={0.05} />

        <gridHelper ref={gridRef} args={[40, 20, "#00ff9c", "#020617"]} position={[0, -3.5, 0]} />

      </Canvas>
    </div>
  );
}
