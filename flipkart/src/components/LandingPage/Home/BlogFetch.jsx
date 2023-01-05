import React from 'react'
import {
    Box,Typography
  } from "@mui/material";
const BlogFetch = ({props}) => {
    console.log(props);
    const {name, desc}=props;
  return (
   <Box style={{paddingLeft:20,paddingRight:20}}>
      <h4 style={{color:"#878787"}}>{name}</h4>
      <Typography style={{color:"#878785",marginTop:"-10px",fontSize:11}}>{desc}</Typography>
   </Box>
  )
}

export default BlogFetch