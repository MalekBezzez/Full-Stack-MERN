import React, { useState } from 'react'
import "./register.scss"
import upload from '../../utlis/upload';
import newRequest from "../../utlis/newRequest";
import { useNavigate } from "react-router-dom";


const register = () => {
  const[file, setFile] = useState(null)
  const [user,setUser] = useState({
    username: "",
    email : "",
    password: "",
    img: "",
    phonenumber: "",
    
    
  });
  
  const navigate =useNavigate()

  const handleChange = (e) =>{
setUser(prev=>{
  return {...prev, [e.target.name]: e.target.value};
})
  };
  const handleSubmit = async (e) =>{
  e.preventDefault()
  const url = await upload(file)
  try{
    await newRequest.post("/auth/register", {
      ...user,
      img:url
    });
    navigate("/");
  }
  catch(err){
    console.log(err);
  }
  }


  return (
    <div className="register">
      <form onSubmit={handleSubmit} >
        
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            
          />
          <label htmlFor="">Password</label>
          <input 
          name="password" 
          type="password" 
          onChange={handleChange} />

          <label htmlFor="">Profile Picture</label>
          <input 
          type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Phone Number</label>
          <input
            name="phonenumber"
            type="text"
            onChange={handleChange}
            
            
          />
          
          <button type="submit">Register</button>
        
        
      </form>
    </div>
  );
}

export default register;