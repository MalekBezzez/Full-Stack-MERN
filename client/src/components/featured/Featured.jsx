import React  from 'react'
import "./Featured.scss"
import { topview } from '../../data/datatop';
import Slider from "infinite-react-carousel"
import TopCard from "../TopCard/TopCard"
const Featured = () => {
    


  return (
    <div className='carousel '>
        <div className='container'> </div>
        <Slider dots  autoplay="true" autoplaySpeed="6000" duration="600" >
            {topview.map(aview=> (
            <TopCard key={aview.id} item={aview }/>
            ))}
        </Slider>
       
        
        
    
    </div>
  )
}

export default Featured