;import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading ,InputRightElement,InputGroup, keyframes } from '@chakra-ui/react';
import axios from 'axios';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useNavigate } from 'react-router-dom';
import RefBg from '../Images/reg-bg.jpg'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate function
    const [animate, setAnimate] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        
        if (!email || !password) {
            setMessage('All fields are required.');
            return;
          }

        try {
            const response = await axios.post('http://itqhub.com/forgot-password', {
                email,
                password,
            });

            setMessage(response.data.message || 'Password reset successful');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Server error');
        } finally {
            setLoading(false);
        }
    };


  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const handleLoginRedirect = () => {
        setAnimate(true);
        setTimeout(() => navigate('/login'), 1000);
      };
 
      const handleRegisterRedirect = () => {
        setAnimate(true);
        setTimeout(() => navigate('/register'), 1000);
      };

      const slideOut = keyframes`
      from { opacity: 1; transform: translateX(0%); }
      to { opacity: 0; transform: translateX(100%); }
    `;
  
    return (
        <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    bgImage={RefBg}
    bgPosition="center"
    bgSize="cover"
    bgRepeat="no-repeat"
    h="100vh"
    filter="brightness(130%)">
        <Box maxW={{sm:"sm", md:"sm"}}
        minW={{sm:"sm", md:"sm"}}
       textAlign="center"
         mt="8" p={{sm:"5%",md:"2%"}}
          borderWidth="1px"
          color="#fff"
          borderRadius="lg" boxShadow="lg"
          animation={animate ? `${slideOut} 1s ease-in-out` : 'none'}>
            <Heading as="h2" size="lg" mb={10} textAlign="center">
        Reset Your Password
      </Heading>
            <form onSubmit={handleSubmit}autoComplete="off" >
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
                <FormControl id="password" isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              paddingRight="4.5em" // Adjust padding to make space for the toggle button
              autoComplete="off"
            />
            {password && (
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="2em"
                                    size="md"
                                    background="none !important"
                                    color="#fb8500"
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        )}
                        </InputGroup>
        </FormControl>
                <Button
                    textAlign="center"
                    mt="4"
                    bgColor="#fb8500"
                    type="submit"
                    isLoading={loading}
                    loadingText="Submitting"
                >
                    Reset Password
                </Button>
            </form>
            {message && (
                <Box mt="4" p="2" color={message.includes('error') ? 'red.500' : 'white.500'}>
                    {message}
                    {message.includes('successful') && (
            <Button colorScheme="teal" onClick={handleLoginRedirect}>
              Please Login
            </Button>
          )}
           {message.includes('Your are a new user') && (
            <Button bgColor="#c91298" color="#fff" ml="2%" onClick={handleRegisterRedirect} _hover={{backgroundColor:"teal.500"}}>
              Please Register.
            </Button>)}
                </Box>
            )}
        </Box>
        </Box>
    );
};

export default ForgotPassword;
