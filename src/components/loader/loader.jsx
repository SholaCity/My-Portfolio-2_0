import React from  'react'
import './loader.css'
import logo from '../../assets/logo.svg'

const loader = () => {

  
  return (
    <div className="loader">
    <div className="loader_image"  style={{backgroundImage: {logo}}}></div>

    <div className="load-items">
      <div className="load-item"></div>
      <div className="load-item"></div>
      <div className="load-item"></div>
      <div className="load-item"></div>
      <div className="load-item"></div>
      <div className="load-item"></div>
    </div>
  </div>  )
}

export default loader