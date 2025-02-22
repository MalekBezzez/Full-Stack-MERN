import React from 'react'
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({item}) => {
  return (

    <Link to="/gig/123" className="link">
    <div className="gigCard">
      <img src={item.img} alt="" />
      <div className="info">
        <p>{item.desc}</p>
        <div className="star">
          <img src="./img/star.png" alt="" />
          <span>{item.star}</span>
        </div>
      </div>
      <hr />
      <div className="detail">
        <img src="./img/heart.png" alt="" />
        <div className="price">
          <span>PRICE</span>
          <h2>
            DT {item.price}
            
          </h2>
        </div>
      </div>
    </div>
  </Link>




  )
}

export default GigCard