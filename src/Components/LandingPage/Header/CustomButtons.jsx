
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import React from 'react'
import { Link,NavLink } from 'react-router-dom';
const CustomButtons = () => {
  return (
    <Wrapper>
        <LoginButton variant ="contained"><NavLink to="/login" style={{textDecoration:"none",color:"black"}}>Login</NavLink></LoginButton>
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <Container to="/cart">
            <ShoppingCart/>
        <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
    </Wrapper>
  )
}

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
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
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));

export default CustomButtons;
