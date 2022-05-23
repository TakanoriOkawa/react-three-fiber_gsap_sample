import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function BoxGeometry() {
  const myMesh = useRef<Mesh>(null);  
  useFrame(() => {
    if(!myMesh.current) return;
    myMesh.current.rotation.x += 0.01;
  })
  
  return (
    <mesh ref={ myMesh }>
      <boxGeometry args={[2,2,2]}></boxGeometry>
    </mesh>
  )
}

export default BoxGeometry