import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Text, Stack, IconButton, useDisclosure, Image, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import siteLogo1 from '../../Images/site-logo.png';
import { IoIosLock , IoIosUnlock } from "react-icons/io";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');

  const links = [
    { path: '/', name: 'Home' },
    { path: '/courses', name: 'Courses' },
    { path: '/aboutus', name: 'About Us' },
    { path: '/contactus', name: 'Contact Us' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    navigate('/'); // Redirect to login page
  };

  return (
    <Box
      bg="#fff"
      boxShadow="md"
      p={2}
      position="sticky"
      top={0}
      zIndex={1000}
      w="100%"
    >
      <Flex h={16} alignItems="center" justifyContent={{ base: 'space-between', md: 'space-around' }} 
        p={{ base: '0% 3%', md: '0px' }}>
        <Flex as={Link} to="/" alignItems="center"p="0.3%" >
          <Image src={siteLogo1} alt="Site Logo" w="60px" h="45px" pl="1%" />
       <Text fontSize={{base:"1.7em" , md:"1.8em"}}
        fontWeight="800"  color="#525fe1" p="0% 1%"
        >ITqHub</Text> 
       {/* <span style={{color:"#FC6D14"}}>q</span> */}
         
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          {links.map((link, index1) => (
            <Text
              key={index1}
              as={Link}
              to={link.path}
              fontSize="1.1em"
              color={location.pathname === link.path ? '#ffa41b' : 'black'}
              fontWeight="500"
              textDecoration="none"
              mx={6}
              _after={{
                content: location.pathname === link.path ? '""' : 'none',
                display: 'block',
                borderBottom: '2px solid #ffa41a',
                width: '100%',
                transform: 'scaleX(1)',
                transition: 'transform 0.3s ease'
              }}
            >
              {link.name}
            </Text>
          ))}
        </Flex>

        <Flex display={{ base: 'none', md: 'inline-block' }} alignItems="center">
          {authToken ? (
            <Button
              onClick={handleLogout}
              fontSize="1em"
              bgColor="#2b3ddb"
              color="#fff"
              fontWeight="600"
              letterSpacing="1.5px"
              _hover={{ bgColor: "#000" }}
            >
              <IoIosUnlock size="25" />&nbsp;Logout
            </Button>
          ) : (
            <Button
              as="a"
              fontSize="1em"
              bgColor="#2b3ddb"
              color="#fff"
              fontWeight="600"
              letterSpacing="1.5px"
              href="/login"
              _hover={{ bgColor: "#000" }}
            >
              <IoIosLock size="25" />&nbsp;Login / Register
            </Button>
          )}
        </Flex>

        <IconButton
          size="md"
          color="#525fe1"
          icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={5} h={5} />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} m="4%" bgColor="#F4F4F4">
          <Stack as="nav" spacing={2}>
            {links.map((link, index2) => (
              <Text
                key={index2}
                as={Link}
                to={link.path}
                borderBottom="1px solid #eae8e8"
                p="2% 4%"
                color={location.pathname === link.path ? '#ffa41b' : 'black'}
                fontWeight="500"
                textDecoration="none"
              >
                {link.name}
              </Text>
            ))}
            {authToken ? (
              <Button
                onClick={handleLogout}
                fontSize="1em"
                bgColor="#F4F4F4"
                padding="0px"
                color="red"
                fontWeight="600"
                ml="2%"
                pl="1%"
                letterSpacing="1px"
                justifyContent="left"
                _hover={{bgColor:"none"}}
              >
                <IoIosLock size="20" /> &nbsp; Logout
              </Button>
            ) : (
              <Button
                as="a"
                fontSize="1em"
                bgColor="#F4F4F4"
                padding="0px"
                href="/login"
                justifyContent="left"
                ml="2%"
                pl="1%"
                _hover={{bgColor:"none"}}
                color="blue"
                fontWeight="600"
                letterSpacing="1px"
              >
                <IoIosUnlock size="20" /> &nbsp; Login / Register
              </Button>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
