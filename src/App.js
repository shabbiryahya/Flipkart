import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Header from "./Components/LandingPage/Header/Header";
import Footer from './Components/LandingPage/Footer/Footer';
import { Box } from '@mui/material'
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


// import logo from './logo.svg';
// import './App.css';
// import { Box } from '@mui/material'
// import Header from './Components/LandingPage/Header/Header';
// import Home from './Components/LandingPage/Home/Home'
// import Footer from './Components/LandingPage/Footer/Footer';
// function App() {
//   return (
//     <>
//    <Header/>
//    <Box style={{marginTop: 54}}>
//    <Home/>
//    </Box>
//     <Footer/>
//     </>
//   );
// }

// export default App;
