import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Vector3Tuple } from 'three'

type Props  = {
  position: Vector3Tuple;
}

function BoxGeometry(props: Props) {
  const myMesh = useRef<Mesh>(null);  
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if(!myMesh.current) return;
    myMesh.current.rotation.x += 0.01;
  })

  return (
    <mesh 
      {...props} 
      ref={ myMesh } 
      scale={[1, 0.4, 1]}
      onPointerOver={() => {setHovered(true)}}
      onPointerOut={() => {setHovered(false)}}
    >
      <boxGeometry />
      <meshStandardMaterial color={ hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

export default BoxGeometry