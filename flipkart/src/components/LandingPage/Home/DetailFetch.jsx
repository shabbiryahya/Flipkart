import {
    Box
  } from "@mui/material";

const DetailFetch = ({props}) => {
 const {Heading, Details} =props;
  return (
   <Box >
    <Box component="span" style={{fontSize:15,color:"grey"}}>{Heading} :</Box>
    {
      Details.map(i => (
        <span  style={{color:"#3d3d3c",fontSize:12}}> {i}  |</span>
    ))
    }
    </Box>
  )
}

export default DetailFetch;