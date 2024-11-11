import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useStore';
import { gsap } from 'gsap';

export function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const selectedEvent = useStore((state) => state.selectedEvent);
  
  const [
    colorMap,
    normalMap,
    specularMap,
    cloudsMap,
    nightMap,
    bumpMap
  ] = useTexture([
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    'https://unpkg.com/three-globe/example/img/earth-topology.png',
    'https://unpkg.com/three-globe/example/img/earth-water.png',
    'https://unpkg.com/three-globe/example/img/earth-clouds.png',
    'https://unpkg.com/three-globe/example/img/earth-night.jpg',
    'https://unpkg.com/three-globe/example/img/earth-topology.png'
  ]);

  useEffect(() => {
    [colorMap, normalMap, specularMap, cloudsMap, nightMap, bumpMap].forEach(texture => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
    });
  }, [colorMap, normalMap, specularMap, cloudsMap, nightMap, bumpMap]);

  useEffect(() => {
    if (selectedEvent && meshRef.current) {
      const phi = (90 - selectedEvent.location.lat) * (Math.PI / 180);
      const theta = (selectedEvent.location.lng + 180) * (Math.PI / 180);
      
      gsap.to(meshRef.current.rotation, {
        x: phi - Math.PI / 2,
        y: -theta,
        duration: 2,
        ease: 'power2.inOut'
      });
      
      if (cloudsRef.current) {
        gsap.to(cloudsRef.current.rotation, {
          x: phi - Math.PI / 2,
          y: -theta,
          duration: 2,
          ease: 'power2.inOut'
        });
      }
    }
  }, [selectedEvent]);

  useFrame((state, delta) => {
    if (meshRef.current && !selectedEvent) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          shininess={5}
          specular={new THREE.Color(0x333333)}
        />
      </mesh>

      {/* Clouds layer */}
      <mesh ref={cloudsRef} scale={1.003}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} scale={1.1}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          transparent
          opacity={0.2}
          color="#4ca6ff"
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}