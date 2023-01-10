import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../LandingPage/Home/Home';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import Products from '../ProductPage/Products';
import SingleProductPage from '../SingleProductPage/SingleProductPage';
import WebPageNotFound from '../ProductPage/WebPageNotFound/WebPageNotFound';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Cart from '../SingleProductPage/Cart';
import CheckoutPage from '../SingleProductPage/CheckoutPage';

export default function AllRoutes() {
  const [state, setState] = useState('');
  const nav = useNavigate();
  useEffect(() => {
    alanBtn({
      key: 'f3d122be4db02ff7a3967a142ab73f932e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'firstCommand') {
          nav('/cart');
        } else if (command == 'secondCommand') {
          nav('/products');
        } else if (command == 'thirdCommand') {
          nav('/product/electronics');
        } else if (command == 'fourthCommand') {
          nav('/');
        }
      },
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
------------------------------------ ---------shabbir routing start-------------------------------
         */}
        <Route
          path="/products/:category_name"
          element={
            <ChakraProvider>
              <Products />
            </ChakraProvider>
          }
        />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
        <Route
          path="/products"
          element={
            <ChakraProvider>
              <Products />
            </ChakraProvider>
          }
        />
        {/* -----------------------------------------nitin route start----------- */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* -----------------------------------------nitin route end----------- */}

        <Route
          path="*"
          element={
            <ChakraProvider>
              <WebPageNotFound />
            </ChakraProvider>
          }
        />
        {/* 
------------------------------------ ---------shabbir routing end-------------------------------
         */}
      </Routes>
    </div>
  );
}
