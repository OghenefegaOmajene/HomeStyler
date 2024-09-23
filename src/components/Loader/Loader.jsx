import React from 'react'
import './Loader.css'
import logo from '../../img/logo1.png'

const Loader = () => {
  return (
    <div className="loader">
        <img src={logo} alt="" />
        <section class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </section>

    </div>

  )
}

export default Loader