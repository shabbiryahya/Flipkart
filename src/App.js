
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Header from "./Components/LandingPage/Header/Header";
import Footer from './Components/LandingPage/Footer/Footer';
import { Box } from '@mui/material'
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Header/>
        <Box style={{marginTop: 54}}>
      <AllRoutes/>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;

