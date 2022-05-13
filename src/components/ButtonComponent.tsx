import React from 'react'


type Props = {
  clickMethod: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function ButtonComponent(props:Props) {
  // Reactのイベントの型（Button用）
  // とりあえず、イベント引数の方はこんな感じ
  const click = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event,"ボタンイベント");
  }

  return (
    <button onClick={props.clickMethod}>ButtonComponent</button>
  )
}

export default ButtonComponent