import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import {Canvas, useThree, useFrame} from '@react-three/fiber';
import gsap from 'gsap';

let _camera: any = ""

// グローバル変数

function MainCanvas() {  
  return (
    <>
    {/* <Canvas
      camera={{
        position: [0, -1.5, 3],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000
    }}
    > */}
    <Canvas>
      <mesh>
        <boxGeometry args={[2,2,2]}></boxGeometry>
      </mesh>
      <Rig></Rig>
    </Canvas>
    <Button></Button>
    </>
  )
}

// childrenはPropsか。受け取り方を勉強しないとな
// {}の時とProps:anyの時とがとがう？？
// これは子とってきているのではん？
function Rig() {
  const ref = useRef(null);
  const { camera, mouse } = useThree()
  _camera = camera;
  console.log(camera);
  return (
    // こちらは単純にコンポーネント内部にあるDOMを設定する
    <group ref={ref}></group>
  )
}

// これはbutton要素なので、canvasの中には置けない。
function Button() {
  const anima = () => {
    console.log("星⭐️" ,_camera)
    gsap.to(_camera.position, {
      duration: 2,
      y:4,
      z:10,
      ease: "power3.inOut",
      onComplete: () => {
        console.log("end!!!!!!!!!")
      }
    })
  }
  return (
    <button onClick={anima}>アニメーション</button>
  )
}

export default MainCanvas