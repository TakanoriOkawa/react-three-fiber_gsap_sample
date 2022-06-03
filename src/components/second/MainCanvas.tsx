import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3Tuple } from 'three';
import * as THREE from 'three';
import { config, animated, useSpring } from '@react-spring/three';
import MainCamera from './MainCamera';

interface GeometryType {
  color: string,
};
interface Props {
  geometriesData: GeometryType[]
}

interface receiveProps {
  geometryData: GeometryType
  number: number,
}

function Box(props: receiveProps) {
  const [clicked, setClicked] = useState(false);
  const geometryData = props.geometryData;
  const number = props.number;
  // ラジアンを求める・角度を求める 例: / 
  const radian = (number / 10) * Math.PI * 2;
  // 円周上に配置する
  const pos:Vector3Tuple = [10 * Math.cos(radian), 0 , 10 * Math.sin(radian)]   
  // const { scale } = useSpring({})

  return (
    // 位置情報をとる
    <mesh 
      position={pos}
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
  })
  // ここの渡し方をもっと深く知りたい
  const geometriesData  = props.geometriesData;
  return (
    <group ref={BoxGroup}>
      { geometriesData.map((geometryData, index) => (
        <Box key={index} geometryData={geometryData} number={index}></Box>
      ))}
    </group>
  )
}


function MainCanvas() {
  const geometriesData:GeometryType[] = [
    { color: 'orange'},
    { color: 'hotpink'},
    { color: 'blue'},
    { color: 'orange'},
    { color: 'hotpink'},
    { color: 'blue'},
    { color: 'orange'},
    { color: 'hotpink'},
    { color: 'blue'},
    { color: 'green'},
  ]

  return (
    <Canvas>
      <MainCamera></MainCamera>
      <BoxGroup geometriesData={geometriesData}></BoxGroup>
      <pointLight power={40} position={[0,10,0]}></pointLight>
      <ambientLight />
    </Canvas>
  )
}

export default MainCanvas