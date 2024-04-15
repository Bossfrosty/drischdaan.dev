'use client';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Noise } from '@react-three/postprocessing';

export function ThreeCanvas() {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 -z-10'>
      <Canvas shadows>
        <color attach='background' args={['#050505']} />
        {/* <mesh receiveShadow position={[0, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color='#fc6b03' />
        </mesh> */}
        <hemisphereLight intensity={1} groundColor='black' />
        <EffectComposer>
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
