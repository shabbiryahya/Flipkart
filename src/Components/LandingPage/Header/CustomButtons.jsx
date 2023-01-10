import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import './CustomButtons.module.css';
import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//------------------Login Imports-----------------------------------------------------------

import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AuthAction from '..//..//Redux_Implementation/Actions/AuthAction';
import Loginstyles from '..//..//Login/LoginCss.module.css';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// const products= JSON.parse(localStorage.getItem("products")) ||[];

//------------------------------------------------------------------------------------------

const CustomButtons = () => {
  //------All Constatnts from Login---------------------------------------------------------
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [enteredOTP, setEnteredOTP] = useState(0);
  const [cartLength, setCartLength] = useState(0);
  // const [signUp, setSignUp] = useState({
  //   leftHeading: 'Login',
  //   leftPara: 'Get access to your Orders, Wishlist and Recommendations',
  //   buttonText: 'New to Flipkart? Create an account',
  // });

  //_____________________________new Modification start_______________________//
  const [signUp, setSignUp] = useState({
    leftHeading: 'Login',
    leftPara: 'Get access to your Orders, Wishlist and Recommendations',
    buttonText: 'New to Flipkart? Create an account',
    button: 'Login',
  });
  //_____________________________new Modification end_______________________//

  const [OTP, setOTP] = useState(Math.floor(100000 + Math.random() * 900000));
  const form = useRef(0);
  const [OTPStatus, setOTPStatus] = useState(false);

  const [loginStatus, setLoginStatus] = useState('');
  const [alerts, setAlerts] = useState('');
  const storeData = useSelector((data) => {
    return data;
  });
 
  useEffect(() => {
    fetchLocalStorage();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loginStatus]);

  const fetchLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('Products')) || [];

    console.log(data.length);
    setCartLength(data.length);
  };

  // const notify = () => toast('Logged Out!');
  const notify = (alerts) => toast(alerts);

  const nav = useNavigate();

  //----------------------------------------------------------------------------------------------------------------

  //-------------------------Login Related Functions------------------------------------------------------------------

  let toggleToSignUpPage = () => {
    console.log('In the toggle');
    if (signUp.leftHeading === 'Login') {
      // setSignUp({
      //   leftHeading: "Looks like you're new here!",
      //   leftPara: 'Sign up with your Email Addressto get started',
      //   buttonText: 'Existing User? Log in',
      // });

      //_____________________________new Modification start_______________________//
      setSignUp({
        leftHeading: "Looks like you're new here!",
        leftPara: 'Sign up with your Email Address to get started',
        buttonText: 'Existing User? Log in',
        button: 'Sign Up',
      });
      //_____________________________new Modification end_______________________//
      console.log(signUp);
    } else {
      // setSignUp({
      //   leftHeading: 'Login',
      //   leftPara: 'Get access to your Orders, Wishlist and Recommendations',
      //   buttonText: 'New to Flipkart? Create an account',
      // });
      //_____________________________new Modification start_______________________//
      setSignUp({
        leftHeading: 'Login',
        leftPara: 'Get access to your Orders, Wishlist and Recommendations',
        buttonText: 'New to Flipkart? Create an account',
        button: 'Login',
      });
      //_____________________________new Modification end_______________________//
      console.log(signUp);
    }
  };

  // let handleOTP = (e) => {
  //   e.preventDefault();
  //   console.log('Now in handleOTP ' + email);
  //_____________________________New Modification start_______________________//
  let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
  let handleOTP = (e) => {
    e.preventDefault();
    let flag = false;
    console.log('This is the user data before storing user' + usersData);

    usersData.map((user) => {
      if (user.toLowerCase() === email.toLowerCase()) {
        flag = true;
      }
    });

    if (flag === false && signUp.button === 'Login') {
      usersData.push(email);
      localStorage.setItem('usersData', JSON.stringify(usersData));
      console.log('This is the user data after storing user' + usersData);
      setSignUp({
        leftHeading: "Looks like you're new here!",
        leftPara: 'Sign up with your Email Address to get started',
        buttonText: 'Existing User? Log in',
        button: 'Sign Up',
      });
      // alert("New user, Please Sign Up first.");
      // setAlerts('New user, Please Sign Up first.');

      notify('New user, Please Sign Up first.');
    } else if (signUp.button === 'Sign Up' && flag === true) {
      // alert("Existing user, Please login");
      // setAlerts('Existing user, Please login');

      notify('Existing user, Please login');

      setSignUp({
        leftHeading: 'Login',
        leftPara: 'Get access to your Orders, Wishlist and Recommendations',
        buttonText: 'New to Flipkart? Create an account',
        button: 'Login',
      });
    } else if (flag === false) {
      usersData.push(email);
      localStorage.setItem('usersData', JSON.stringify(usersData));
      console.log('This is the user data after storing user' + usersData);
    }

    //_____________________________New Modification end_______________________//

    emailjs
      .sendForm(
        'service_l2no0u5',
        'template_jyixbmq',
        form.current,
        'NHgL0MEUd1SypNJJb'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
          setLoginStatus('otpsent');

          setTimeout(() => {
            setOTPStatus(true);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setOTPStatus(false);
        }
      );
  };

  let checkOTP = () => {
    console.log('Comparing' + enteredOTP + '===' + OTP);
    let str1 = enteredOTP + '';
    let str2 = OTP + '';
    if (str1 === str2) {
      // alert('Login Successful');
      setLoginStatus('success');

      setTimeout(() => {
        setModalOpen(false);
        AuthAction(true);
      }, 3000);
    } else {
      // alert('Enter correct OTP!');
      setLoginStatus('error');
    }
  };

  let handeLoginClick = () => {
    if (!storeData.AuthReducer.isLogin) {
      setModalOpen(true);
      setLoginStatus('');
    } else {
      alert('You are already Logged in');
      setLoginStatus('');
    }
  };

  let handeLogoutClick = () => {
    if (!storeData.AuthReducer.isLogin) {
      alert('Already Logout');
    } else {
      // setAlerts('Logged Out!');

      // setTimeout(() => {
      //   notify();
      // }, 2000);

      notify('Logged Out!');

      // setLoginStatus('logout');

      // alert('You Log out successfully');

      setTimeout(() => {
        setOTPStatus(false);

        AuthAction(false);
        nav('/products/top_offers');
      }, 5000);
    }
  };

  //---------------------------------------------------------------------------------------------------------------------
  // : loginStatus === 'logout' ? (
  //   <Alert severity="warning">Logout— success!</Alert>
  // )
  return (
    <Wrapper>
      {storeData.AuthReducer.isLogin ? (
        <LoginButton onClick={handeLogoutClick} variant="contained">
          Logout
          <ToastContainer />
        </LoginButton>
      ) : (
        <LoginButton onClick={handeLoginClick} variant="contained">
          Login
        </LoginButton>
      )}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className={Loginstyles.ModalWindow}
        shouldCloseOnEsc={true}
        // shouldReturnFocusAfterClose={true}
      >
        <Box sx={{ margin: 'auto' }}>
          {loginStatus === 'success' ? (
            <Alert severity="success">Login-Succeessful</Alert>
          ) : loginStatus === 'error' ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Wrong OTP Entered — <strong>check it out!</strong>
            </Alert>
          ) : loginStatus === 'otpsent' ? (
            <Alert severity="success">OTP sent!</Alert>
          ) : null}
        </Box>

        <div className={Loginstyles.maincontainer}>
          <div className={Loginstyles.leftBackground}>
            <div className={Loginstyles.leftinner}>
              <span className={Loginstyles.loginHeading}>
                <span>{signUp.leftHeading}</span>
              </span>
              <p className={Loginstyles.para}>
                <span className={Loginstyles.LoginPara}>{signUp.leftPara}</span>
              </p>
            </div>
          </div>
          <div className={Loginstyles.formdiv}>
            <form action="" ref={form} id={Loginstyles.form}>
              <label className={Loginstyles.inputLabel}>
                Enter your Email Address
              </label>
              <div>
                <input
                  type="email"
                  className={Loginstyles.inputBox}
                  placeholder="Enter your Email Address"
                  name="user_email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={Loginstyles.privacyPolicy}>
                By continuing, you agree to Flipkart's{' '}
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>{' '}
                Privacy Policy.
              </div>
              <textarea
                style={{ visibility: 'hidden' }}
                name="OTP"
                defaultValue={`Refer OTP: ${OTP}`}
              />
              {!OTPStatus ? (
                <button
                  type="submit"
                  onClick={handleOTP}
                  className={Loginstyles.requestOTPBtn}
                  name="user_email"
                >
                  Request OTP
                  <ToastContainer style={{marginTop:"50px"}} />
                </button>
              ) : null}
            </form>

            {OTPStatus ? (
              <div className={Loginstyles.OTPDiv}>
                <label className={Loginstyles.OTPLabel}>Enter OTP</label>
                <div className={Loginstyles.OtpInputDiv}>
                  <input
                    type="number"
                    placeholder="Enter OTP"
                    className={Loginstyles.inputBox}
                    onChange={(e) => {
                      setEnteredOTP(e.target.value);
                    }}
                  />
                </div>
                {/* <button
                  onClick={checkOTP}
                  className={Loginstyles.requestOTPBtn}
                >
                  Login
                </button> */}
                {/* //_______________New modification start____________// */}
                <button
                  onClick={checkOTP}
                  className={Loginstyles.requestOTPBtn}
                >
                  {signUp.button}
                </button>
                {/* //_______________New modification end____________// */}
              </div>
            ) : null}
            <div className={Loginstyles.toSignUp} onClick={toggleToSignUpPage}>
              {signUp.buttonText}
            </div>
          </div>
        </div>
      </Modal>

      <Typography style={{ marginTop: 3, width: 135, cursor: 'pointer' }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, cursor: 'pointer' }}>More</Typography>

      <Container to="/cart">
        <ShoppingCart />{' '}
        {cartLength ? (
          <span
            style={{
              position: 'absolute',
              top: '5px',
              right: '180px',
              backgroundColor: 'red',
              borderRadius: '50%',
              width: '15px',
              textAlign: 'center',
            }}
          >
            {cartLength}
          </span>
        ) : null}
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
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
      marginTop: 10,
    },
  },
  [theme.breakpoints.down('md')]: {
    // display: 'block',
    visibility: 'hidden',
  },

  [theme.breakpoints.down('lg')]: {
    // display: 'block',
    visibility: 'hidden',
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  // padding: '5px 40px',
  left: '58%',
  height: 32,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#3c52b2',
  },
  [theme.breakpoints.down('md')]: {
    // background: '#2874f0',
    // color: '#FFFFFF',
    visibility: 'hidden',
  },
}));

export default CustomButtons;
