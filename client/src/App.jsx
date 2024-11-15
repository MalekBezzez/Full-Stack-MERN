import React from "react"
import Navbar from "./components/navbar/navbar" 
import Home from "./pages/Home/home" 
import Footer from "./components/footer/Footer";
import Gig from "./pages/gig/gig"
import Gigs from "./pages/Gigs/gigs"
import Dashboard from "./pages/dashboard/dashboard"
import Add from "./pages/add/add"
import MyGigs from "./pages/MyGigs/MyGigs";
import Published from "./pages/Published/Published"
import Login from "./pages/login/login";
import Register from "./pages/register/register";


 import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";



function App() {
  const Layout = ()=>{
    return (
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path:"/",
        element:<Home/>

        },
        {path:"/gig/:id",
        element:<Gig/>

        },
        {path:"/gigs",
        element:<Gigs/>

        },
        
        {path:"/mygigs",
        element:<MyGigs/>

        },
        {path:"/published",
        element:<Published/>

        },
        
        {path:"/dashboard",
        element:<Dashboard/>

        },
        {path:"/add",
        element:<Add/>

        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },

      ]
    },
  ]); 

  return (
    <>
    <div>
      
      <RouterProvider router={router} /> 

      </div>
    
  
    
    </>
  )
  
}


export default App
