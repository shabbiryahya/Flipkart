import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuth=useSelector((storedData)=>{

        return storedData.AuthReducer.isLogin;
    })
  return (

    isAuth?{children}:<Navigate to="/login"/>
   
  )
}

export default PrivateRoute