import React, { SyntheticEvent, useRef } from 'react'

function InputComponent() {
  // useRefは再レンダリングが走らない。
  const inputEl = useRef<HTMLInputElement>(null);
  const checkValue = (e:SyntheticEvent) => {
    // 値を入れる箱はuseStateを使う
    // 再レンダリングが発生しない点。これはどういうこと？
    console.log("useRefの値を見る", inputEl.current?.offsetHeight);

    if(inputEl.current) {
      inputEl.current.style.backgroundColor = "red";
    }
  }

  return (
    <>
    <label>名前</label>
    <input type="text" ref={inputEl} onChange={checkValue} />
    </>
  )
}

export default InputComponent