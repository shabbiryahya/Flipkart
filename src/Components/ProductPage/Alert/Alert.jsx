import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import React from 'react';

const Alert = () => {
  return <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  
};

export default Alert;
