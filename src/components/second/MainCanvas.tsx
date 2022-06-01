import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3Tuple } from 'three';
import * as THREE from 'three';
import { config, animated, useSpring } from '@react-spring/three';

interface GeometryType {
  position: Vector3Tuple,
  color: string,
};
interface Props {
  geometriesData: GeometryType[]
}

interface receiveProps {
  geometryData: GeometryType
}

function Box(props: receiveProps) {
  const [clicked, setClicked] = useState(false);
  const geometryData = props.geometryData
  // const { scale } = useSpring({})
  return (
    <mesh 
      position={geometryData.position}
      scale={clicked ? 2 : 1}
      onClick={() => {setClicked(!clicked)}}
    >
      <boxGeometry></boxGeometry>
      <meshStandardMaterial color={geometryData.color}></meshStandardMaterial>
    </mesh>
  )
}

// useFrameは子でないと使えないので、グループコンポーネント作成
function BoxGroup(props: Props) {
  const BoxGroup = useRef<THREE.Group>(null);
  useFrame(() => {
    if(!BoxGroup.current) return;
    BoxGroup.current.rotation.y += 0.01;
    BoxGroup.current.rotation.z += 0.02;
  })
  // ここの渡し方をもっと深く知りたい
  const geometriesData  = props.geometriesData;
  return (
    <group ref={BoxGroup}>
      { geometriesData.map((geometryData, index) => (
        <Box key={index} geometryData={geometryData}></Box>
      ))}
    </group>
  )
}



function MainCanvas() {
  const geometriesData:GeometryType[] = [
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
    <Canvas>
      <BoxGroup geometriesData={geometriesData}></BoxGroup>
      <pointLight power={40} position={[0,10,0]}></pointLight>
      <ambientLight />
    </Canvas>
  )
}

export default MainCanvas