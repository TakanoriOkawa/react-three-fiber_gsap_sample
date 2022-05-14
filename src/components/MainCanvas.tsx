import React from 'react'
import {Canvas} from '@react-three/fiber';

function MainCanvas() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2,2,2]}></boxGeometry>
      </mesh>
    </Canvas>
  )
}

export default MainCanvas