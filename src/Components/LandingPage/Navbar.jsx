import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <button><NavLink to='/login'>Login</NavLink></button>
    </div>
  )
}
