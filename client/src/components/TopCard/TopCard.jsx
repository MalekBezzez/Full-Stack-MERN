import React from 'react'

import "./TopCard.scss"

const CatCard = ({item}) => {
  return (
     
    <div className='topcard'>
        
            <img  className="imgtopcard" src={item.src} alt=""/>
            
           

        
    </div>
   
  )
}

export default CatCard