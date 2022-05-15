import React from 'react'
import { Dialog } from '@mui/material'


type ChildPropsType = {
  open: boolean,
  closeFunc: () => void, // 渡す関数の型を定義
}
function Child(props: ChildPropsType){
  // propsを展開
  const {open, closeFunc} = props;

  return (
    <Dialog open={open} onClose={closeFunc} title="ダイアログタイトル"></Dialog>
  )
}

export default Child