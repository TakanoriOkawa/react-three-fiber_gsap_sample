import * as THREE from 'three'
import React, { useState,useEffect, useRef } from 'react'
import {Canvas} from '@react-three/fiber';
import gsap from 'gsap';
import BoxGeometry from './three/BoxGeometry';
import Camera from './three/Camera';
import Button from './three/Button';
import { viewsPoint } from '../module/cameraPoint';

function MainCanvas() {  
  // set関数を渡す？
  const [camera, setCamera] = useState();

  const checkCameraState = () =>{
    console.log(camera);
  }

  const changeCameraView = (position:string) =>{
    console.log("位置を変える");
  }

  return (
    <>
    <Canvas>
      <BoxGeometry></BoxGeometry>
      <Camera setCamera={setCamera}></Camera>
    </Canvas>
    <Button position='left' changeCameraView={changeCameraView}></Button>
    </>
  )
}

// これはbutton要素なので、canvasの中には置けない。
// function Button() {
//   const anima = () => {
//     // gsap.to(_camera.position, {
//     //   duration: 2,
//     //   y:4,
//     //   z:10,
//     //   ease: "power3.inOut",
//     //   onComplete: () => {
//     //     console.log("end!!!!!!!!!")
//     //   }
//     // })
//   }
//   return (
//     <button onClick={anima}>アニメーション</button>
//   )
// }

export default MainCanvas