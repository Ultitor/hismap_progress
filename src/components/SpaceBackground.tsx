import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Nebula({ position, rotation, scale, color }: any) {
  const texture = useTexture('https://assets.codepen.io/982762/noise.png');
  const material = useMemo(() => {
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color
    });
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return mat;
  }, [texture, color]);

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[20, 20]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export function SpaceBackground() {
  const starsRef = useRef<THREE.Points>(null);
  const nebulaGroupRef = useRef<THREE.Group>(null);

  const nebulae = useMemo(() => [
    {
      position: [10, 5, -15],
      rotation: [0, 0.5, 0.2],
      scale: [3, 2, 1],
      color: '#ff3060'
    },
    {
      position: [-15, -5, -10],
      rotation: [0.2, -0.3, 0],
      scale: [2.5, 2, 1],
      color: '#4ca6ff'
    },
    {
      position: [0, -10, -20],
      rotation: [-0.3, 0.1, 0.2],
      scale: [3.5, 2.5, 1],
      color: '#9f60ff'
    }
  ], []);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
      starsRef.current.rotation.z += delta * 0.01;
    }
    if (nebulaGroupRef.current) {
      nebulaGroupRef.current.rotation.y += delta * 0.01;
      nebulaGroupRef.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <>
      {/* Multiple star layers for depth */}
      <Stars
        ref={starsRef}
        radius={100}
        depth={50}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={50}
        depth={25}
        count={3000}
        factor={6}
        saturation={1}
        fade
        speed={2}
      />

      {/* Nebula group */}
      <group ref={nebulaGroupRef}>
        {nebulae.map((nebula, index) => (
          <Nebula key={index} {...nebula} />
        ))}
      </group>

      {/* Enhanced lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[100, 100, 100]} intensity={0.8} color="#fff" />
      <pointLight position={[-100, -100, -100]} intensity={0.5} color="#4ca6ff" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#fff" />
      
      {/* Atmospheric fog */}
      <fog attach="fog" args={['#000', 30, 100]} />
    </>
  );
}