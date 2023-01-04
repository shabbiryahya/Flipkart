import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from '../LandingPage/Navbar'
import Login from '../Login/Login'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
