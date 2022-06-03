import * as THREE from 'three'
import React, {useRef} from 'react'
import {useThree} from '@react-three/fiber';

function Camera(props:any) {
  // 子コンポーネントでカメラデータを親から渡したステート変数を入れる
  const { camera } = useThree()
  props.setCamera(camera)
  // NOTE:Canvasの子にはdivは入れてはダメ。
  return (
    <></>
  )
}

export default Camera