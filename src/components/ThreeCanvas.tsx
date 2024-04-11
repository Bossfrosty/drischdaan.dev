'use client';

import { Canvas } from '@react-three/fiber';

export function ThreeCanvas() {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 -z-10'>
      <Canvas shadows>
        <mesh scale={[100, 100, 0]}>
          <planeGeometry />
        </mesh>
      </Canvas>
    </div>
  );
}
