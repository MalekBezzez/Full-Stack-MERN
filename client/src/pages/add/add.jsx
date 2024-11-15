import React from "react";
import "./add.scss";

const Add = () => {
  return (
    <div className="add">
      
      <div className="container">
         
        <div className="sections">
        
          <div className="left">
          <h1>Add New Gig</h1>
            <label htmlFor="">Title</label>
            <input
              type="text"
              
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="art">Art Club</option>
              <option value="singing">Singing Club</option>
              <option value="danse">Danse Club</option>
              <option value="instruments">Insrtuments</option>
              <option value="workshop">Workshop</option>

            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service " ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
          <h1 style= {{visibility:"hidden"}}  >Add New Gig </h1>
            <label htmlFor="">Service Title</label>
            <input type="text" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor=""> Time Options  </label>
            
            
            
            <input type="text" placeholder="example Monday 8 am" />
            <input type="text"  />
            <input type="text"  />
            
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;