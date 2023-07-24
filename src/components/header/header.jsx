import React from 'react'
import './header.css'


const header = () => {

  return (
    <div className='web__header section__padding'>
      <p className=' p__text'>Hello! I'm Victor</p>
      <h1 className='gradient__text'>Frontend Developer</h1>
      <p className=' web__header-abouttext'>
        I build stuffs that runs on your browser
      </p>
      <div className='web__header-btn'>
        <a href='#about' className='cta__button'>About Me</a>
        <a href='#project' className='cta__button'>Projects</a>
      </div>
    </div>
  )
}

export default header