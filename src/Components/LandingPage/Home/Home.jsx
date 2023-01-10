import React, { useEffect } from 'react';
import NarBar from './NarBar';
import Banner from './Banner';
import Details from './Details';
import { Box, styled } from '@mui/material';
import Blog from './Blog';
import MidSection from './MidSection';
import MidSlide from './MidSlide';
import ProductSection from './ProductSection';
import { Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';

window.document.title =
  'Online Shopping in India,online Shopping store,Online Shopping Site,Buy Online,Shop Online,Online Shopping,Flipkart';
localStorage.removeItem('Products');
const Home = () => {
  const isLogin = useSelector((data) => {
    return data.AuthReducer.isLogin;
  });

  var products;
  useEffect(() => {
    window.scroll(0,0);
    const getData = async () => {
      let url = await fetch('https://flipkart-data.onrender.com/top_offers');
      products = await url.json();
    };
    getData();
  });

  useEffect(() => {
    localStorage.removeItem('Products');
  }, [localStorage]);

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

  return (
    <>
      <NarBar />

      <Component>
        <Banner />x
        <MidSlide title={'Deals Of the Day'} />
        <MidSection />
        <ProductSection title="Products" />
        <ProductSection title="Mobiles" />
        <MidSection />
      </Component>
      <Details />
      <Blog />
    </>
  );
};
const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;
export default Home;

// import React,  { useEffect } from 'react';

// import { Box, styled } from '@mui/material';

// import NavBar from './Home/NarBar';
// import Banner from './Home/Banner';
// import MidSlide from './Home/MidSlide';
// import MidSection from './Home/MidSection';
// import Slide from './Home/Slide';

// import { useSelector, useDispatch } from 'react-redux'; // hooks
// import { getProducts as listProducts } from '../redux/actions/productActions';

// const Component = styled(Box)`
//     padding: 20px 10px;
//     background: #F2F2F2;
// `;

// const Home = () => {
//     const getProducts = useSelector(state => state.getProducts);
//     const { products, error } = getProducts;

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(listProducts())
//     }, [dispatch])

//     return (
//         <>
//             <NavBar />
//             <Component>
//                 <Banner />
//                 <MidSlide products={products} />
//                 <MidSection />
//                 <Slide
//                     data={products}
//                     title='Discounts for You'
//                     timer={false}
//                     multi={true}
//                 />
//                 <Slide
//                     data={products}
//                     title='Suggested Items'
//                     timer={false}
//                     multi={true}
//                 />
//                 <Slide
//                     data={products}
//                     title='Top Selection'
//                     timer={false}
//                     multi={true}
//                 />
//                 <Slide
//                     data={products}
//                     title='Recommended Items'
//                     timer={false}
//                     multi={true}
//                 />
//             </Component>
//         </>
//     )
// }

// export default Home;
