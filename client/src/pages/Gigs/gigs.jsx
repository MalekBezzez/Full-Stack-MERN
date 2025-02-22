import React, { useRef, useState } from "react";
import "./gigs.scss";

import {gigs} from "../../data/gigsdata.js" ;

import GigCard from "../../components/gigcard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false); // when i click the menu become hidden
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
   
    <div className="gigs">
      
      <div className="container">
        
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open) } /*oposite of open */ />
            {open && ( // if its open
              <div className="rightMenu">
                {sort === "sales" ? ( // to hide the chosen option
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => ( //make card for each element 
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;