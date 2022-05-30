import { useState,useEffect } from 'react'
import {Camera,Canvas} from '@react-three/fiber';
import gsap from 'gsap';
import BoxGeometry from './three/BoxGeometry';
import CameraComponent from './three/Camera';
import { objectPosition} from '../module/cameraPoint';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

function MainCanvas() {
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);  // scrollTriggerの登録
    ScrollTrigger.defaults({
      immediateRender: false, 
      scrub: true,
    });
  },[]);

  const initScrollAnimation = () => {
    if(!camera) return;

    let timeline = gsap.timeline();
    timeline.to(camera.position, {
      y: 1,
      z: 3,
      scrollTrigger: {
        trigger: "#first",
        start: "top top",
        markers: true,
      },
    });
    timeline.to(camera.rotation, {
      y: 1,
      z: 1,
      scrollTrigger: {
        trigger: "#second",
        start: "top bottom",
        markers: true,
      },
    });
  }
  // const changeCameraView = (position:string) =>{
  //   // 一致するものを取り出す。
  //   const view = viewsPoint[position];
  //   // カメラのpositionオブジェクトに対してアニメーション
  //   if(!camera)return;
  //   gsap.to(camera.position, {
  //     duration: view.duration,
  //     x: view.x,
  //     y: view.y,
  //     z: view.z,
  //     onComplete: () => {console.log("終了")}
  //   })
  // }

  const returnTop = () => {
    // 最初のエレメントへ移動
    const element = document.getElementById("first");
    if(!element) return;
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  
  initScrollAnimation();

  return (
    <>
    <Canvas>
      { objectPosition.map((data,index) => (
        <BoxGeometry position={data} key={index}></BoxGeometry>
      ))}
      <CameraComponent setCamera={setCamera}></CameraComponent>
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
    </Canvas>

    <div className='buttons'>
      {/* cameraPointsの数だけループでボタンを作る */}
      <button onClick={returnTop}>Topへ</button>

      <Link to='/secondPage'>セカンドページへ</Link>
    </div>
    </>
  )
}

export default MainCanvas