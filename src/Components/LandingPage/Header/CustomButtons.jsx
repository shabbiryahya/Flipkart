
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import React from 'react'
import { Link,NavLink } from 'react-router-dom';

//------------------Login Imports-----------------------------------------------------------

import { useState } from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import AuthAction from '..//..//Redux_Implementation/Actions/AuthAction';
import Loginstyles from '..//..//Login/LoginCss.module.css'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

//------------------------------------------------------------------------------------------



const CustomButtons = () => {
  //------All Constatnts from Login---------------------------------------------------------
    const [modalOpen, setModalOpen] = useState(false);
    const[email, setEmail]=useState("");
    const[enteredOTP, setEnteredOTP]=useState(0);
    const[signUp, setSignUp]=useState({
      leftHeading:"Login",
      leftPara: "Get access to your Orders, Wishlist and Recommendations",
      buttonText:"New to Flipkart? Create an account"
    });
    const[OTP, setOTP]=useState(Math.floor(100000 + Math.random() * 900000));
    const form = useRef(0);
    const[OTPStatus, setOTPStatus]=useState(false)
    const storeData=useSelector((data)=>{
      return data;
    })

  //----------------------------------------------------------------------------------------------------------------

//-------------------------Login Related Functions------------------------------------------------------------------

    let toggleToSignUpPage=()=>{
      console.log("In the toggle")
      if(signUp.leftHeading==='Login'){
      setSignUp({
        leftHeading:"Looks like you're new here!",
        leftPara: "Sign up with your Email Addressto get started",
        buttonText:"Existing User? Log in"
      })
      console.log(signUp);
    }
      else{
        setSignUp({
          leftHeading:"Login",
          leftPara: "Get access to your Orders, Wishlist and Recommendations",
          buttonText:"New to Flipkart? Create an account"
        })
        console.log(signUp)
      }
    }


    let handleOTP=(e)=>{
      e.preventDefault();
      console.log("Now in handleOTP "+email);
      emailjs.sendForm('service_l2no0u5', 'template_jyixbmq', form.current, 'NHgL0MEUd1SypNJJb')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          setOTPStatus(true)
  
      }, (error) => {
          console.log(error.text);
          setOTPStatus(false)
      });
  };


  let checkOTP=()=>{
    console.log("Comparing"+enteredOTP+"==="+OTP)
    let str1=enteredOTP+""
    let str2=OTP+""
    if(str1===str2){
      alert("Login Successful")
      setModalOpen(false)
      AuthAction(true);
    }
    else{
      alert("Enter correct OTP!");
    }
  }

  let handeLoginClick=()=>{
    if(!storeData.AuthReducer.isLogin){
      setModalOpen(true);
    }
    else{
      alert("You are already Logged in");
    }
  }

  let handeLogoutClick=()=>{
    if(!storeData.AuthReducer.isLogin){
      alert("Already Logout");
    }
    else{
      AuthAction(false);
      alert("You Log out successfully")
      setOTPStatus(false);
    }
  }

//---------------------------------------------------------------------------------------------------------------------

  return (
    <Wrapper>
      {storeData.AuthReducer.isLogin? <LoginButton onClick={handeLogoutClick} variant ="contained">Logout</LoginButton>:
      <LoginButton onClick={handeLoginClick} variant ="contained">Login</LoginButton>
      }
        <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className={Loginstyles.ModalWindow}
      >
    <div className={Loginstyles.maincontainer}>
      <div className={Loginstyles.leftBackground}>
        <div className={Loginstyles.leftinner}>
          <span className={Loginstyles.loginHeading}>
            <span >{signUp.leftHeading}</span>
          </span>
          <p className={Loginstyles.para}>
              <span className={Loginstyles.LoginPara}>
                {signUp.leftPara}
              </span>
          </p>
        </div>
      </div>
      <div className={Loginstyles.formdiv}>
        <form action="" ref={form}  id={Loginstyles.form}>
          <label className={Loginstyles.inputLabel}>Enter your Email Address</label>
          <div><input type="email" className={Loginstyles.inputBox} placeholder='Enter your Email Address'  name="user_email" onChange={(e)=>{setEmail(e.target.value)}}/></div>
          <div className={Loginstyles.privacyPolicy}>
            By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> Privacy Policy.
          </div>
          <textarea style={{visibility: "hidden"}} name="OTP" defaultValue={`Refer OTP: ${OTP}`}/>
          {!OTPStatus?<button type='submit' onClick={handleOTP} className={Loginstyles.requestOTPBtn} name="user_email">Request OTP</button>:null}
        </form>

        {OTPStatus?<div className={Loginstyles.OTPDiv}>
          <label className={Loginstyles.OTPLabel} >Enter OTP</label>
          <div className={Loginstyles.OtpInputDiv}><input type="number" placeholder='Enter OTP' className={Loginstyles.inputBox} onChange={(e)=>{setEnteredOTP(e.target.value)}}/></div>
          <button onClick={checkOTP}  className={Loginstyles.requestOTPBtn} >Login</button>
        </div>:null
        }
        <div className={Loginstyles.toSignUp} onClick={toggleToSignUpPage}>
          {signUp.buttonText}
        </div>
      </div>
    </div>
    </Modal>

        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <Container to="/cart">
            <ShoppingCart/>
        <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
    </Wrapper>
  )
}

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));

export default CustomButtons;
