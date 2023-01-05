import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material'
import Header from './Components/LandingPage/Header/Header';
import Home from './Components/LandingPage/Home/Home'
function App() {
  return (
    <>
   <Header/>
   <Box style={{marginTop: 54}}>
   <Home/>
   </Box>
 
    </>
  );
}

export default App;
