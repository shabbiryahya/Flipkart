import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from "../Login/Login"
import Home from "../LandingPage/Home/Home"
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
