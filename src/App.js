import AllRoutes from './Components/AllRoutes/AllRoutes';
import Header from './Components/LandingPage/Header/Header';
import Footer from './Components/LandingPage/Footer/Footer';
import { Box } from '@mui/material';



function App() {


  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: 54 }}>
        
        <AllRoutes />
       
        
      </Box>
      <Footer />
    </div>
  );
}

export default App;
