import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Vector3Tuple } from 'three'

type Props  = {
  position: Vector3Tuple;
}

function BoxGeometry(props: Props) {
  const myMesh = useRef<Mesh>(null);  
  useFrame(() => {
    if(!myMesh.current) return;
    myMesh.current.rotation.x += 0.01;
  })

  return (
    <mesh {...props} ref={ myMesh } scale={[1, 0.4, 1]}>
      <boxGeometry></boxGeometry>
    </mesh>
  )
}

export default BoxGeometry