import * as THREE from 'three'
import React, { useState,useEffect, useRef } from 'react'
import {Camera,Canvas} from '@react-three/fiber';
import gsap from 'gsap';
import BoxGeometry from './three/BoxGeometry';
import CameraComponent from './three/Camera';
import Button from './three/Button';
import { viewsPoint } from '../module/cameraPoint';

function MainCanvas() {  
  const [camera, setCamera] = useState<Camera>();

  const changeCameraView = (position:string) =>{
    // 一致するものを取り出す。
    const view = viewsPoint[position];
    // カメラのpositionオブジェクトに対してアニメーション
    if(!camera)return;

    gsap.to(camera.position, {
      duration: view.duration,
      x: view.x,
      y: view.y,
      z: view.z,
      onComplete: () => {console.log("終了")}
    })
  }

  return (
    <>
    <Canvas>
      <BoxGeometry></BoxGeometry>
      <CameraComponent setCamera={setCamera}></CameraComponent>
    </Canvas>
    <Button position='initial' changeCameraView={changeCameraView}></Button>
    <Button position='left' changeCameraView={changeCameraView}></Button>
    <Button position='right' changeCameraView={changeCameraView}></Button>
    </>
  )
}

export default MainCanvas