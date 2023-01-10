import spp from './SingleProductPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import addtocart from './img/product.png';
import rating from './img/rating.png';
import { useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import redsmall from './img/redsmall.jpeg';
import redlarge from './img/redlarge.jpeg';

//------------------Login Imports-----------------------------------------------------------

import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AuthAction from '../Redux_Implementation/Actions/AuthAction';
import Loginstyles from '../Login/LoginCss.module.css';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
//------------------------------------------------------------------------------------------

function SingleProductPage() {
  const nav = useNavigate();

  const [page, setPage] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const notify = (alerts) => toast(alerts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loginStatus]);
  //------All Constatnts from Login---------------------------------------------------------
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [enteredOTP, setEnteredOTP] = useState(0);
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
  const storeData = useSelector((data) => {
    return data;
  });

  //----------------------------------------------------------------------------------------------------------------
  //-------------------------Login Related Functions------------------------------------------------------------------
  // function message(msg){
  //   if (window.webkitNotifications) {
  //       if (window.webkitNotifications.checkPermission() == 0) {
  //       notification = window.webkitNotifications.createNotification(
  //         'picture.png', 'Title', msg);
  //                   notification.onshow = function() { // when message shows up
  //                       setTimeout(function() {
  //                           notification.close();
  //                       }, 1000); // close message after one second...
  //                   };
  //       notification.show();
  //     } else {
  //       window.webkitNotifications.requestPermission(); // ask for permissions
  //     }
  //   }
  //   else {
  //       alert(msg);// fallback for people who does not have notification API; show alert box instead
  //   }
  //   }

  let toggleToSignUpPage = () => {
    console.log('In the toggle');
    if (signUp.leftHeading === 'Login') {
      // setSignUp({
      //   leftHeading: "Looks like you're new here!",
      //   leftPara: 'Sign up with your Email Addressto get started',
      //   buttonText: 'Existing User? Log in',
      // });
      setSignUp({
        leftHeading: "Looks like you're new here!",
        leftPara: 'Sign up with your Email Address to get started',
        buttonText: 'Existing User? Log in',
        button: 'Sign Up',
      });
      //_____________________________new Modification end_______________________//
      console.log(signUp);
    } else {
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

        if (page === 'checkout') {
          nav('/checkout');
        } else if (page === 'cart') {
          nav('/cart');
        }
      }, 3000);
      // setModalOpen(false);
      // AuthAction(true);
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
      //   alert('You are already Logged in');
      setLoginStatus('');

      if (page === 'checkout') {
        nav('/checkout');
      } else if (page === 'cart') {
        nav('/cart');
      }
    }
  };

  let handeLogoutClick = () => {
    if (!storeData.AuthReducer.isLogin) {
      alert('Already Logout');
    } else {
      AuthAction(false);
      alert('You Log out successfully');
      setOTPStatus(false);
    }
  };

  //---------------------------------------------------------------------------------------------------------------------

  function handlecart() {
    let Products = [
      {
        category_id: 3,
        category_name: 'mobiles',
        image: 'https://i.ibb.co/6bZc0zJ/f6b32d514024.jpg',
        description: 'realme 9 (Stargaze White, 128 GB)',
        stars: 4.3,
        ratings: '4,161 Ratings ',
        reviews: ' 310 Reviews',
        warranty:
          '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories',
        new_price: 34998,
        old_price: 41998,
        discount: 40,
        delivery_type: 'Free delivery',
        offer: '₹16,750',
        offer2: ' Off on Exchange',
        hidden_stars: 4.3,
        item_id: 1,
        quantity: 1,
      },
    ];
    localStorage.setItem('Products', JSON.stringify(Products));

    setPage('cart');
    handeLoginClick();
  }

  const checkout = () => {
    setPage('checkout');
    // nav('/checkout');
    handeLoginClick();
  };
  return (
    <>
      <div className={spp.maindiv}>
        <div id={spp.leftdiv}>
          <div id={spp.leftimgdiv}>
            <div id={spp.oneimg}>
              <img
                src="https://rukminim1.flixcart.com/image/128/128/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70"
                alt=""
              />
            </div>
            <div id={spp.twoimg}>
              <img
                src="https://rukminim1.flixcart.com/image/128/128/l1mh7rk0/mobile/5/s/i/-original-imagd5zqdrdfbrfp.jpeg?q=70"
                alt=""
              />
            </div>
            <div id={spp.threeimg}>
              <img
                src="https://rukminim1.flixcart.com/image/128/128/l1mh7rk0/mobile/w/1/v/-original-imagd5zqykyctu5h.jpeg?q=70"
                alt=""
              />
            </div>
          </div>
          <div id={spp.rightimgdiv}>
            {/* <img
              src="https://rukminim1.flixcart.com/image/416/416/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70"
              alt="phone image"
            /> */}
            <div className="fluid" style={{  }}>
                            <div className="fluid__image-container" style={{ }}>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: redsmall,
                                    },
                                    largeImage: {
                                        src: redlarge,
                                        width: 1200,
                                        height: 1800
                                    },
                                    shouldUsePositiveSpaceLens: true,
                                    enlargedImageContainerDimensions:{width: '250%', height: '150%'},
                                    enlargedImagePosition:"side",
                                    
                                }} />
                            </div>
                 </div>
            <div id={spp.btndiv}>
              <button
                id={spp.cartdiv}
                onClick={handlecart}
                style={{ cursor: 'pointer' }}
              >
                <i class="fa-solid fa-cart-shopping"></i> ADD TO CART
              </button>

              <button
                id={spp.buydiv}
                style={{ cursor: 'pointer' }}
                onClick={checkout}
              >
                <i class="fa-solid fa-bolt-lightning"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div id={spp.rightdiv}>
          <div id={spp.titlediv}>
            <p>realme 9 5G(Stargaze White, 128 GB) (6 GB RAM)</p>
          </div>
          <div id={spp.ratingmaindiv}>
            <div id={spp.ratingdiv}>
              <p>
                4.4 <i class="fa-solid fa-star"></i>
              </p>
            </div>
            <div id={spp.countratingdiv}>
              <p>24,274 Ratings</p>
            </div>
            <div id={spp.anddiv}>
              <p>&</p>
            </div>
            <div id={spp.countreviews}>
              <p>1,854 Reviews</p>
            </div>
            <div id={spp.assureddiv}>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="assured"
              />
            </div>
          </div>
          <div id={spp.extraratediv}>
            <p>Extra ₹451 off</p>
          </div>
          <div id={spp.pricedetaildiv}>
            <div id={spp.finalpricediv}>
              <p>₹34,998</p>
            </div>
            <div id={spp.discountdiv}>
              <div id={spp.originalpricediv}>
                <p>₹41,998</p>
              </div>
              <div id={spp.percentoff}>
                <p>16% off</p>
              </div>
            </div>
            <div id={spp.alertdiv}>
              <i class="fa-solid fa-circle-exclamation" id={spp.icondiv}></i>
            </div>
          </div>
          <div id={spp.offerdiv}>
            <p>Available offers</p>
          </div>
          <div id={spp.bankofferonediv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Bank Offer</p>
            </div>
            <div>
              <p>
                10% off on Bank of Baroda Credit Card EMI Transactions, up to
                ₹1,500 on orders of ₹5,000 and above
              </p>
            </div>
            <div>
              <a href="#">T&C</a>
            </div>
          </div>

          <div id={spp.bankoffertwodiv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Bank Offer</p>
            </div>
            <div>
              <p>
                10% off on IDFC FIRST Credit Card EMI Transactions, up to ₹1,000
                on orders of ₹5,000 and above
              </p>
            </div>
            <div>
              <a href="#">T&C</a>
            </div>
          </div>
          <div id={spp.bankofferthreediv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Bank Offer</p>
            </div>
            <div>
              <p>
                Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value
                ₹1000. Valid once per Paytm account
              </p>
            </div>
            <div>
              <a href="#">T&C</a>
            </div>
          </div>
          <div id={spp.bankofferfourdiv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Special Price</p>
            </div>
            <div>
              <p>Get extra ₹451 off (price inclusive of cashback/coupon)</p>
            </div>
            <div>
              <a href="#">T&C</a>
            </div>
          </div>
          <div id={spp.bankofferfivediv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Partner Offer</p>
            </div>
            <div>
              <p>
                Purchase now & get a surprise cashback coupon for January /
                February 2023
              </p>
            </div>
            <div>
              <a href="#">Know More</a>
            </div>
          </div>
          <div id={spp.bankoffersixdiv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Partner Offer</p>
            </div>
            <div>
              <p>
                Sign up for Flipkart Pay Later and get Flipkart Gift Card worth
                up to ₹500*
              </p>
            </div>
            <div>
              <a href="#">Know More</a>
            </div>
          </div>
          <div id={spp.bankoffersevendiv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>Special Price</p>
            </div>
            <div>
              <p>5% Cashback on Flipkart Axis Bank Card</p>
            </div>
            <div>
              <a href="#">T&C</a>
            </div>
          </div>
          <div id={spp.bankoffereightdiv}>
            <div>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
                alt=""
              />
            </div>
            <div id={spp.offersdiv}>
              <p>No cost EMI ₹1,082/month.</p>
            </div>
            <div>
              <p>Standard EMI also available</p>
            </div>
            <div>
              <a href="#">View Plans</a>
            </div>
          </div>
          <div id={spp.buytogether}>
            <img src={addtocart} alt="addtocart" />
          </div>
          <div>
            <img src={rating} alt="rating img" />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className={Loginstyles.ModalWindow}
      >
        <Box sx={{ margin: 'auto' }}>
          {loginStatus === 'success' ? (
            <Alert severity="success">Login-Succeessful</Alert>
          ) : loginStatus === 'error' ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Wrong OTP Entered — <strong>check it out!</strong>
            </Alert>
          ) : loginStatus === 'logout' ? (
            <Alert severity="warning">Logout— success!</Alert>
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
                  <ToastContainer style={{ marginTop: '50px' }} />
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
    </>
  );
}
export default SingleProductPage;
