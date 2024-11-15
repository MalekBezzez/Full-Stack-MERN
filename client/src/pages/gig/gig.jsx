import React from "react";
import "./gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
         
         
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="/img/afro danse cover.jpg"
              alt=""
            />
            <img
              src="/img/carousel2.jpg"
              alt=""
            />
            <img
              src="/img/carousel1.jpg"
              alt=""
            />
          </Slider>
          
          <h2>About This Gig</h2>
          <p>
          Afro dance is where hip-hop, jazz and dancehall meet. The perfect cocktail for letting off steam and building stamina. Afro dance training is the best way to learn at your own pace and benefit from the best advice from an expert.
            
          </p>
         
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/userlogo.png"
                  alt=""
                />
                <div className="info">
                  <span>Malek Bezzez</span>
                
                </div>
                
                
                
              </div>
              <p>
                I just want to say that art  was the first, and after
                this Communication was
                amazing, 
                        . They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/userlogo.png"
                  alt=""
                />
                <div className="info">
                  <span>Mouna Bezzez</span>
                 
                </div>
              </div>
              
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/userlogo.png"
                  alt=""
                />
                <div className="info">
                  <span>Mokhles Ben rfifa </span>
                  
                </div>
              </div>
              
              <p>
                Amazing work! Communication was
                amazing
               . They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Afro Danse Club </h3>
            <h2>60DT</h2>
          </div>
          <p>
           Join us form more fun !
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span> </span>
            </div>
            
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Monday 9am-10am</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>thursday 8am-9am</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>saturday 9am-10am</span>
            </div>
            
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;