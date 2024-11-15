import React from 'react'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import Decoration from '../../components/decoration/decoration'

import Slidecat from '../../components/SlideCat/Slidecat'


const home = () => {
  return (
    
    <div className='home'> 
     <Featured />
     <Decoration/>
     <div className='features'>
      <div className="container">
        <div className="item">
        <h1>
            Welcome to the Fausse Note Cultural Center!
            </h1>
            
          <div className="title">
            <img src="./img/checkbox1.png"></img>
            <h3>We are a place dedicated to creativity, art, and culture.</h3>
          </div>
          <div className="title">
            <img src="./img/checkbox1.png"></img>
           <h3> Our mission is to celebrate artistic diversity in all its forms, whether through art exhibitions, concerts, creation workshops, or exciting conferences.

           </h3>
          </div>
          <div className="title">
            <img src="./img/checkbox1.png"></img>
           <h3> Fausse Note is a space where artists can express themselves freely and where art enthusiasts can connect and be inspired. 
           </h3>
          </div>
          <div className="title">
            <img src="./img/checkbox1.png"></img>
            <h3>Join us for a unique and enriching cultural experience!
            </h3>
          </div>
         
        </div>
        <div className="item">
          <video src="./img/intro.mp4" muted   controls poster="/img/poster.png" >

          </video>
          
        </div>


      </div>
     </div>
     
     <Slidecat/> 
     <Decoration/>
     <div className="local">
      <div className="container">
        
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12844.954984377213!2d10.5834992!3d36.4034186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd61aff34641c9%3A0x7b6bd2c49e2d4330!2sCentre%20culturel%20Fausse%20Note%20Hammamet!5e0!3m2!1sfr!2stn!4v1707516818679!5m2!1sfr!2stn"
          width="500" height="290" allowfullscreen="" loading="eager"  ></iframe>
        </div>
        <div className="item">
        <img src="./img/mapsmove.gif" alt=""></img>
        <span className='address'>Street Nevers, Hammamet 8050 </span>

        </div>
      </div>
     </div>
     <Decoration/>

      
    
    </div>
    
  )
}
export default home
