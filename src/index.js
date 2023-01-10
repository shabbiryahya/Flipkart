import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import FlipkartStore from './Components/Redux_Implementation/Store/Store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const muiTheme = createTheme();
const theme = extendTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={FlipkartStore}>
   
        <BrowserRouter>
          <App />
        </BrowserRouter>
     
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
