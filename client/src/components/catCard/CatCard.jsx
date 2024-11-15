import React from 'react'
import { Link} from 'react-router-dom'
import "./CatCard.scss"

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=theater" >
    <div className='catcard'>
        
            <img  className="imgcard" src={item.img} alt=""/>
            
            <span className="title">{item.title}</span>
            <span className="desc">{item.desc}</span> 

        
    </div>
    </Link>
  )
}

export default CatCard