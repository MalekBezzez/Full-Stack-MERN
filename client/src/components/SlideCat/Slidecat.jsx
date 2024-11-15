import React from 'react'
import "./Slidecat.scss"
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import {cards} from '../../data/datacat'

const Slidecat = () => {
return (
    <div className='slidecat'>
        <div className="header">
        <h1 >Our Categories</h1>
        </div>
        <div className="container">
            
            <Slider   slidesToShow={4}   autoplay="true" autoplaySpeed="5000" duration="400" >
            { cards.map(card=>(
        <CatCard key={card.id} item={card}/>
            ))}
            
            
            </Slider>


        </div>
    </div>
  )
}

export default Slidecat