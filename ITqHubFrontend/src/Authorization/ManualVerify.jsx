import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import axios from 'axios';

const ManualVerify = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleManualVerify = () => {
    axios.post('http://itqhub.com/manual-verify', { userId })
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        setMessage('An error occurred while verifying the user.');
      });
  };

  return (
    <Box textAlign="center" p={5}>
      <FormControl id="email" isRequired mb="4">
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete="off"
                    />
                </FormControl>
      <Button onClick={handleManualVerify} colorScheme="teal">Verify User</Button>
      {message && <Text mt={4} color="teal.500">{message}</Text>}
    </Box>
  );
};

export default ManualVerify;
