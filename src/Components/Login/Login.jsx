import React from 'react'
import { useState } from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import AuthAction from '../Redux_Implementation/Actions/AuthAction';


export default function Login() {
    // let otp=Math.floor(100000 + Math.random() * 900000);
    const[email, setEmail]=useState("");
    const[enteredOTP, setEnteredOTP]=useState(0);
    const[OTP, setOTP]=useState(Math.floor(100000 + Math.random() * 900000));
    const form = useRef(0);
   
   let handleOTP=(e)=>{

    e.preventDefault();
    console.log("Now in handleOTP "+email);
    emailjs.sendForm('service_l2no0u5', 'template_jyixbmq', form.current, 'NHgL0MEUd1SypNJJb')
    .then((result) => {
        console.log(result.text);
        console.log("Message sent");

    }, (error) => {
        console.log(error.text);
    });
};

let checkOTP=()=>{
  console.log("Comparing"+enteredOTP+"==="+OTP)
  let str1=enteredOTP+""
  let str2=OTP+""
  if(str1===str2){
    alert("Success")
    AuthAction(true);
  }
  else{
    alert("Enter correct OTP!")
  }
}

  return (
    <div>
      <form action="" ref={form}  style={{
        backgroundColor:"black",
        height:"300px"
      }}>
        <input type="email"  placeholder='Enter your Email Address'  name="user_email" onChange={(e)=>{setEmail(e.target.value)}} style={{
            margin:"50px"
        }}/>
        <label>Message</label>
        <textarea style={{visibility: "hidden"}} name="OTP" defaultValue={`Refer OTP: ${OTP}`}/>
        <button type='submit' onClick={handleOTP} name="user_email">Send OTP</button>
      </form>
      <label>Enter OTP</label>
      <input type="number" placeholder='Enter OTP' onChange={(e)=>{setEnteredOTP(e.target.value)}}/>
      <button onClick={checkOTP}>Login</button>
    </div>
  )
}