import React from 'react'
import MainCanvas from '../components/MainCanvas';
import '../scss/index.scss'

function Index() {
  return (
    <div className='index-page'>
      <div id="first"></div>
      <div id="canvas-container">
        <MainCanvas />
      </div>
      <div id="second"></div>
    </div>
  )
}

export default Index