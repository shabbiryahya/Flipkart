
import React from 'react'
import { Typography, Box, styled } from '@mui/material'; 
import { navData } from '../constants/data';
import { NavLink } from 'react-router-dom';

const NarBar = () => {
  return (
    <Component>
    {
        navData.map(temp => (
            <Container>
                <NavLink to={`/products/${temp.text.toLowerCase()}`} style={{textDecoration:"none",color:'black'}}>
                <img src={temp.url} style={{  width: 64 }} alt="narimg"/>
                <Text>{temp.text}</Text>
                </NavLink>
            </Container>
        ))
    }
</Component>
  )
}

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap:25,
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;
export default NarBar