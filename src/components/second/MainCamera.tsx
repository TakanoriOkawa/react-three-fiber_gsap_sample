import { useEffect, useRef } from 'react'
import { useThree, Camera } from '@react-three/fiber';
import { PerspectiveCamera } from 'three'

function MainCamera() {
  const ref = useRef();
  const { camera } = useThree();
  // const PerspectiveCamera

  useEffect(() => {
    console.log("aaa");
  }, [])
  
  return (
    <></>
  )
}

export default MainCamera