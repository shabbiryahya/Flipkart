
import React, { useEffect } from 'react'
import NarBar from './NarBar'
import Banner from './Banner'
import Details from './Details';
import { Box, styled } from '@mui/material';
import Blog from './Blog';
import Footer from '../Footer/Footer';
import Profile from '../Header/Profile';
import MidSection from './MidSection';
import MidSlide from './MidSlide';
const Home = () => {
var products;
  useEffect(()=>{
   const getData=async()=>{
    let url= await fetch("https://flipkart-data.onrender.com/top_offers")
     products = await url.json();
   }
   getData();
  })
  return (
    <>
    <NarBar/>
    
    <Component>
       <Banner/> 
      <MidSection/>
    </Component>
    <Details/>
    <Blog/>
    </>
  )
}
const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;
export default Home
















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