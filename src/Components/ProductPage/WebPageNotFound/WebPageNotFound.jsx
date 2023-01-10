import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Image, Box, Text } from '@chakra-ui/react';

const WebPageNotFound = () => {
  return (
    <Box m="100">
      <Image
        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
        alt="pagenotfound"
        margin="auto"
      />
      <Alert status="error" m="auto" justifyContent="center">
        <AlertIcon />
        <AlertTitle>Sorry!</AlertTitle>
        <AlertDescription>Web Page Not Found.</AlertDescription>
      </Alert>
      <Box
        textAlign="center"
        margin="20px auto"
        // border="1px solid black"
        p="2"
        width="20%"
        bgColor="rgb(40,116,240)"
        color="white"
      >
        <Text>Back To Home</Text>
      </Box>
    </Box>
  );
};

export default WebPageNotFound;
