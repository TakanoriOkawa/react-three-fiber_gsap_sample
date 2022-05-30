import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3Tuple, Group } from 'three';
import * as THREE from 'three';


function Box2() {
  const BoxGroup = useRef<THREE.Group>(null);

  useFrame(() => {
    if(!BoxGroup.current) return;
    BoxGroup.current.rotation.y += 0.01;
  })


  interface GeometryType {
    position: Vector3Tuple,
    color: string,
  };

  const GeometryInfo:GeometryType[] = [
    {
      color: 'orange',
      position: [-2,-1,0]
    },
    {
      color: 'hotpink',
      position: [2,-1,0],
    },
    {
      color: 'blue',
      position: [0,-1,0],
    }
  ]

  return (
    <group ref={BoxGroup}>
      { GeometryInfo.map((value,index) => (
        <mesh key={index} position={value.position}>
          <boxGeometry></boxGeometry>
          <meshStandardMaterial color={value.color}></meshStandardMaterial>
        </mesh>
      ))}
    </group>
  )
}

function MainCanvas() {
  return (
    <Canvas>
      <Box2></Box2>
      <pointLight power={40} position={[0,10,0]}></pointLight>
      <ambientLight />
    </Canvas>
  )
}

export default MainCanvas