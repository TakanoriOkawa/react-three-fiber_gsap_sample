import { type } from 'os'
import React from 'react'

type Props = {
  // カメラの位置のタイプを表示
  position: string,
  // 実行するメソッドの型を定義
  changeCameraView: (position:string) => void,
}

function Button(props:Props) {
  const position = props.position;
  const changeCameraView = props.changeCameraView;

  return (
    <button onClick={() => changeCameraView(position)}>Buttonです</button>
  )
}

export default Button