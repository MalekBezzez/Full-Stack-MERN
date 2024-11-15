import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <hr/>
      
        <div className="left">
          <h2>Fausse Note </h2>
          <span>
           © 2024 Copyright
          </span>
         
        </div>
        <div className="right">
          <div className="contact">
            <div className="phone">
          <img src="./img/phone.png"></img>
          <span>(+216) 56 268 758</span>
          </div>
          <div className="mail">
          <img   src="./img/gmail.png"></img>
          <span>bezzezm@gmail.com</span>
          </div>
          </div>
          <div className="social">
            <img src="./img/facebook.png" alt=""></img>
            <img src="./img/linked.png" alt=""></img>
            <img src="./img/insta.png" alt=""></img>
            <img src="./img/tiktok.png" alt=""></img>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer