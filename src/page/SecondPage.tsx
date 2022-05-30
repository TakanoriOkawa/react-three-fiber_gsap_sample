import React from 'react'
import MainCanvas from '../components/second/MainCanvas';
import '../scss/second-page.scss';

function SecondPage() {
  return (
    <div className='second-page'>
      <h1 className="title">SecondPage</h1>
      <div id="second-canvas">
        <MainCanvas></MainCanvas>
      </div>
    </div>
  )
}

export default SecondPage
