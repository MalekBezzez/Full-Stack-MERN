import React, {useEffect, useState} from 'react';
import "./navbar.scss";
import {Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import newRequest from '../../utlis/newRequest';

const navbar = () => {
  const [active, setActive]=useState(false);
  const [open, setOpen]=useState(false);
  const {pathname} = useLocation()

  const isActive= ()=>{
    if(window.scrollY >0){
      setActive(true);
    }
    else
    {setActive(false);}
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",isActive);
  return ()=>{
    window.removeEventListener("scroll",isActive);
  };
},[]);

const currentUser= JSON.parse(localStorage.getItem("currentUser"));

const navigate = useNavigate()
const handleLogout = async ()=>{
try{
await newRequest.post("/auth/logout");
localStorage.setItem("currentUser" , null);// delete cookies of current user 
navigate("/")
}
catch(err){
  console.log(err)

}
}
const handleJoin = async ()=>{
try{

// delete cookies of current user 
navigate("/register")
}
catch(err){
  console.log(err)

}
}

const handleSignIn = async ()=>{
  try{
  
  // delete cookies of current user 
  navigate("/login")
  }
  catch(err){
    console.log(err)
  
  }
  }

  
    return (
    <div className={active|| pathname!="/" ? "navbar active":"navbar"}>
    <div className='container' >
        <div className='logo'>
          <Link to="/" className='link'>
        <img src="./img/logo-brand.jpg" />
         </Link> 
        
        </div>
        <div className='links'>
          
            <span>Explore</span>
            <span>About us</span>
            <span>Contact</span>
            {!currentUser && (<div className='buttonsnav'><button onClick={handleJoin}>Join</button>
            <button onClick={handleSignIn}>Sign In</button></div>)}
            {currentUser && (
              <div className="user" onClick={()=>setOpen(!open)}>
                <img src= {currentUser.img || "./img/userlogo.png"} alt="userlogo"></img>
                <span>{currentUser.username}</span>
                {open && <div className='options'>
                  {
                    currentUser?.isAdmin ? ( 
                      <>
                    
                      <Link className="link" to ="/add">Add new gig</Link >
                      <Link  className="link" to="/dashboard">Dashboard</Link>
                      <Link className="link" to="/published"> Published</Link>
                      
                      </>
                    ):( //not admin
                      <>
                      <Link className="link" to="/mygigs"> MyGigs</Link>
                      
                      </>
                    )
                  }
                
                  
                  
                      <Link className="link" onClick={handleLogout} >Logout</Link >

                  </div>}
                  </div>
            )}
            
          
        </div>
        </div>  


    </div>
    
  )
}

export default navbar