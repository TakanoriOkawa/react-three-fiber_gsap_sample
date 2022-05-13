import React from 'react'

function ButtonComponent() {
  // Reactのイベントの型（Button用）
  // とりあえず、イベント引数の方はこんな感じ
  const click = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event,"ボタンイベント");
  }

  return (
    <button onClick={click}>ButtonComponent</button>
  )
}

export default ButtonComponent