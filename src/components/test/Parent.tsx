import React from 'react'
import Child from './Child'
import { Link } from "react-router-dom";

// CSSを読み込み
import "../../css/router-link.css"

function Parent() {
  // 関数を渡して子のコンポで表示を切り替えている。
  const [open, setOpen] = React.useState(false);
  // 子コンポーネントのイベントハンドラに渡すのよう関数。
  const closeDialog = () => {
    console.log("閉じる",open)
    setOpen(false)
  }

  const openDialog = () => {
    console.log("開く",open)
    setOpen(true)
  }

  // v-ifみたいな挙動が見たいな。
  // 親のstate変数を渡す。これでv-ifみたいな挙動になるのか？
  return (
    <div>
      <h1>親</h1>
      <Link className='router-link' to='/'>TOPへ</Link>
      <Child open={open} closeFunc={closeDialog}></Child>
      <button onClick={openDialog}>ダイアログを開ける</button>
    </div>
  )
}

export default Parent
