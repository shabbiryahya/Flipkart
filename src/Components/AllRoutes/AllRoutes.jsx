import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Login from "../Login/Login"
import Home from "../LandingPage/Home/Home"
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState, } from 'react';


export default function AllRoutes() {
  const[state,setState] =useState("");
  const nav=useNavigate();
  useEffect(()=>{
     alanBtn({
      key:'f3d122be4db02ff7a3967a142ab73f932e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand:({command})=>{
        if(command==="firstCommand"){
           nav("/cart")
        }
        else if(command=="secondCommand"){
          nav("/product");
        }
        else if(command=="thirdCommand"){
          nav("/product/electronics");
        }
        else if(command=="fourthCommand"){
          nav("/");
        }
      }
     })
  },[]);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
      </Routes>
    </div>
  )
}
