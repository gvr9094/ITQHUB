import React, { useState } from 'react';
import axios from 'axios';
import RefBg from '../Images/reg-bg.jpg';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
  keyframes,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  // Regex to enforce the password rules: at least one letter, one number, and one special character
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordBlur = () => {
    // Validate password against the regex
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }

    // Validate password before submission
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one letter, one number, and one special character.');
      return; // Prevent form submission if the password is invalid
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://itqhub.com/register', {
        name,
        email,
        password,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data : 'Server error');
    }
  };

  const handleLoginNavigation = () => {
    setAnimate(true);
    setTimeout(() => navigate('/login'), 1000);
  };

  const slideOut = keyframes`
    from { opacity: 1; transform: translateX(0%); }
    to { opacity: 0; transform: translateX(100%); }
  `;

  return (
    <Box
      bgImage={RefBg}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Box
        minW="sm"
        maxW="sm"
        mx="auto"
        p={{ sm: '5%', md: '2%' }}
        borderWidth={3}
        borderRadius="lg"
        boxShadow="lg"
        color="#fff"
        textAlign="center"
        animation={animate ? `${slideOut} 1s ease-in-out` : 'none'}
      >
        <Heading as="h2" size="lg" mb={3}>
          Register
        </Heading>
        <form onSubmit={handleRegister} autoComplete="off">
          <FormControl id="name" isRequired mb={4}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              paddingRight="30px"
              autoComplete="off"
            />
          </FormControl>
          <FormControl id="email" isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              paddingRight="30px"
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
                onBlur={handlePasswordBlur}
                paddingRight="4.5em"
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
            {passwordError && (
              <Text color="red.500" fontSize="sm">
                {passwordError}
              </Text>
            )}
          </FormControl>
          <FormControl id="confirm-password" isRequired mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                paddingRight="4.5em"
                autoComplete="off"
              />
            </InputGroup>
          </FormControl>
          <Button type="submit" bgColor="#fb8500" width="full" mt={4} _hover={{ bg: '#ff9f00' }}>
            Register
          </Button>
        </form>
        {message && (
          <Text mt={4} color="#fff" textAlign="center">
            {message}
          </Text>
        )}
        <Button
          variant="link"
          mt="8"
          onClick={handleLoginNavigation}
          color="#fff"
          _hover={{ textDecoration: 'none' }}
        >
          Already Have an account? &nbsp;
          <Text as="span" color="#c91298" _hover={{ textDecoration: 'underline' }}>
            Login
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
