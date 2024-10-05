import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Spinner, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');

      if (token) { 
        try {
          const response = await axios.get(`http://itqhub.com/verify?token=${token}`);
          setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response ? error.response.data.message : 'Server error');
        }
      } else {
        setMessage('Invalid or missing token.');
      }
      
      setLoading(false); // Set loading to false after request completes
    };

    verifyEmail();
  }, [searchParams]);

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={4}>Email Verification</Heading>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <>
          <Text color="teal.500" mb={4}>{message}</Text>
          {message.includes('successful') && (
            <Button colorScheme="teal" onClick={handleLoginRedirect}>
              Go to Login
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default Verify;
