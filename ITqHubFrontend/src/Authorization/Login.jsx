import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, InputGroup, InputRightElement ,keyframes } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import RefBg from '../Images/reg-bg.jpg'

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [animate, setAnimate] = useState(''); // State for animation

  const navigate = useNavigate();

  

const handleLogin = async (e) => {
  e.preventDefault();
  
  if (!email || !password) {
    setMessage('All fields are required.');
    return;
  }

try {
  const response = await axios.post('http://itqhub.com/login', {
    email,
    password,
  });
  if (response.status === 200) {
    const { token } = response.data;  // Assuming your API returns a token
  
    localStorage.setItem('authToken', token);  // Store the token in localStorage
   
    navigate('/');
  }
  setMessage(response.data);
} catch (error) {
  setMessage(error.response ? error.response.data : 'Server error');
}
};

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to navigate to the registration page
  const handleRegisterNavigation = () => {
    setAnimate('slideIn');
    setTimeout(() => navigate('/register'), 1000); // Adjust the timeout to match the animation duration
  };

  const handleResetPasswordNavigation = () => {
    setAnimate('slideUp');
    setTimeout(() => navigate('/forgot-password'), 1000);
  }

  const handleVerifyRedirect= () => {
    setAnimate('slideUp');
    setTimeout(() => navigate('/manual-verify'), 1000);
  }

  const slideIn = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-100%); }
`;

const slideUp = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-100%); }
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
    <Box
      minW="sm"
      maxW="sm"
      mx="auto"
      p={{sm:"5%",md:"2%"}}
      borderWidth={3}
      borderRadius="lg"
      boxShadow="lg"
       color="#fff"
      textAlign="center"
      animation={
        animate === 'slideIn'
          ? `${slideIn} 1s ease-in-out`
          : animate === 'slideUp'
          ? `${slideUp} 1s ease-in-out`
          : 'none'
      }
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleLogin} autoComplete="off">
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </FormControl>
        <FormControl id="password" isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
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
        <Button type="submit" bgColor="#fb8500" width="full" mt={4} _hover={{ bg: '#ff9f00' }}>
          Login
        </Button>
      </form>
      
      {message && (
        <Box>
        <Text mt={4} color="#fff" textAlign="center">
          {message}
        </Text>
          </Box>
      )}
      <Button
        variant="link"
        mt="8"
        color="#fff"
        onClick={handleRegisterNavigation}
        _hover={{ textDecoration: 'none' }}
      >
        Don't have an account ?&nbsp;&nbsp;
        <Text as="span" color="#c91298" _hover={{ textDecoration: 'underline' }}>
  Register
</Text>
      </Button>
      <Button
        variant="link"
        mt="2"
        color="#c91298"
        onClick={handleResetPasswordNavigation}
        _hover={{ textDecoration: 'underline' }}
      > Forgot Password
      </Button>
    </Box>
    </Box>
  );
}
