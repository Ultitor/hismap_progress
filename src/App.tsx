import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe } from './components/Globe';
import { Timeline } from './components/Timeline';
import { EventInfo } from './components/EventInfo';
import { Controls } from './components/Controls';
import { SpaceBackground } from './components/SpaceBackground';

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <SpaceBackground />
        <Globe />
        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
      
      <Controls />
      <Timeline />
      <EventInfo />
    </div>
  );
}

export default App;