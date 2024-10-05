import React, { useState} from 'react';
import {
  Box, Flex, Text, Input, Button, Checkbox, FormControl, FormErrorMessage,
  Container, Image, VStack, InputGroup, InputLeftAddon ,Icon,AspectRatio,SimpleGrid
} from '@chakra-ui/react';
import axios from 'axios';
import { MdOutlineHome , MdOutlineEmail  } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import shape1 from '../../Images/shape1.png';
import shape2 from '../../Images/shape2.png';
import shape3 from '../../Images/shape3.png';
import shape4 from '../../Images/shape4.png';
import shape5 from '../../Images/hero-section-vector4.svg'
import shape6 from '../../Images/hero-section-vector2.svg'
import HeaderBg from '../../Images/pagesBg.jpg';
import contactMe from '../../Images/contact-me.jpg';
import AppBar from '../../Components/AppBar/AppBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import HubSpotForm from '../../Components/HubSpotForm/HubSpotForm.jsx';
export default function ContactForm() {
 
  return (
    <Box>
      <AppBar />
      <Box bgImage={HeaderBg} p={{base:"8%" , md:'1.5%'}} >
        <Container maxW="container.xl">
          <VStack spacing={6} align='left' >
          <Text textAlign={{ base: "center", md: "left" }}
                fontSize={{base:"3xl",md:"5xl"}}
                fontWeight='600'> Contact Us</Text>
            <Box display={{base:"none", md:"block"}} position="relative" w="100%">
              <Box position="absolute" bottom="3%" left="0%">
                <Image src={shape1} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" top="-129" left="70%">
                <Image src={shape2} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" bottom={3} right={0}>
                <Image src={shape3} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" bottom="1%" left="50%" boxSize="50px">
                <Image src={shape4} alt="Breadcrumb Abstract Shape" />
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box display="flex" position="relative" flexDirection={{ base: "column", md: "row" }} 
       mb="7%" alignItems="center" justifyContent="center" mt={{base:"15%" , md:"8%"}}>
        <Box position="relative" textAlign="center" justifyContent="center" w="400px" h="467px" mb={{ base: "4", md: "0" }}>
          <Image src={contactMe} alt="Contact Me" objectFit="cover" w="100%" h="100%" />
          <Text position="absolute" top="70%" left="20%" fontSize="xl" color="white" 
          fontWeight="bold" bg="rgba(0, 0, 0, 0.5)" p={4} borderRadius="8px">
            Don’t Be Hesitate To<br /> Contact With Me
          </Text>
          <Box position="absolute" top="-7%" left="-8%" zIndex="-1">
        <Image src={shape5} alt="shape1" />
      </Box>
      <Box position="absolute" bottom="-6%" right="-10%" zIndex="-1">
        <Image src={shape6} alt="shape2" filter="saturate(205%)" />
      </Box>
        </Box>

        <Box overflowY="none" width="90%" maxWidth="500px">
          <Text fontSize="1.5em" fontWeight="600" m="0.4%" letterSpacing="1px"
           textAlign="center">
            Quick Enquiry
          </Text>
          <Box position="relative" justifyContent="center" 
          alignContent="center" padding="4% 2%" display="block">
          <Box id="hubspot-form-container" maxWidth="100%" bgColor="transparent !important"
                  margin="0 auto"
                  padding="23px"
                  borderRadius="8px"
                ><HubSpotForm/></Box>
            {/* <form onSubmit={handleEnquiry}>
              <FormControl id="fullname"  isRequired>
                <Input
                  id="name"
                  placeholder=" Enter your fullname"
                  value={fullname}
                  border="2px solid black"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>

              <br />

              <FormControl id="email" isRequired>
                <Input
                  id="email"
                  placeholder=" Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  border="2px solid black"
                />
              </FormControl>

              <br />

              <FormControl id="phonenumber" isRequired>
                <InputGroup border="0.5px solid #000" borderRadius="8px">
                  <InputLeftAddon
                    children={
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Image src={indFlag} width="25px" height="18px" />
                        <Text ml="10%">+91</Text>
                      </Box>
                    }
                  />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    border="1px solid black"
                    borderRadius="0px 5px 5px 0px"
                  />
                </InputGroup>
              </FormControl>

              <Box p="5% 1%">
                <Checkbox isChecked={isChecked}
                 onChange={(e) => setIsChecked(e.target.checked)}>
                  I hereby agree to the terms and conditions
                </Checkbox>
              </Box>

              <Flex justifyContent="center">
                <Button
                  m="4% 1%"
                  type="submit"
                  padding="1% 25%"
                  bgColor="#525fe1"
                  borderRadius="5px"
                  color="#fff"
                  _hover={{ bgColor: "#fff", color: "blue" }}
                >
                  Submit
                </Button>
              </Flex>
            </form> */}
            {/* {message && (
        <Text mt={4} color="red.500" textAlign="center">
          {message}
        </Text>
      )} */}
          </Box>
        </Box>
      </Box>

      

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={1} 
  bg="#F7F7F7" borderRadius="md" m="5%" p="4">

    {/* Head Office */}
  
  <Box flex="1" p="4" >
    <Flex align="center" mb="2">
      <Icon as={MdOutlineHome} boxSize={8} color="teal.400" mr="2" />
      <Text fontSize="lg" fontWeight="600" color="teal.400">
        Head Office Address
      </Text>
    </Flex>
    <Text fontSize="lg" fontWeight="400" color="gray.700">
      Unit: 114, Manjeera Trinity Corporate, KPHB 4th Phase, Hyderabad, Telangana, 500072.
    </Text>
  </Box>

  {/* <Box flex="1.5" p="4" borderLeft={{ md: "1px solid", base: "none" }} borderColor="gray.200">
    <Flex align="center" mb="2">
      <Icon as={MdOutlineHome} boxSize={8} color="teal.400" mr="2" />
      <Text fontSize="lg" fontWeight="600" color="teal.400">
        Bangalore Office Address
      </Text>
    </Flex>
    <Text fontSize="lg" fontWeight="400" color="gray.700">
      1-188/10, 24th Cross Road, Jayanagar, 4th block beside SBI, Bengaluru, Karnataka, 560041.
    </Text>
  </Box> */}

  <Box flex="1" p="4"  borderLeft={{ md: "1px solid", base: "none" }} borderColor="gray.200">
    <Flex align="center" mb="2">
      <Icon as={MdOutlineEmail} boxSize={7} color="teal.400" mr="2" />
      <Text fontSize="lg" fontWeight="600" color="teal.400">
        Email Address: &nbsp;
      </Text>
      <Text fontSize="lg" fontWeight="400" color="gray.700">
      info@itqhub.com
    </Text>
    </Flex>
   
    <Flex align="center" mt="4">
      <Icon as={BiSolidPhoneCall} boxSize={7} color="teal.400" mr="2" />
      <Text fontSize="lg" fontWeight="600" color="teal.400">
        Contact Number: &nbsp;
      </Text>
      <Text fontSize="lg" fontWeight="400" color="#000">
        +91 9281433642
      </Text>
    </Flex>
  </Box>

  <Box flex="1" p="4" borderLeft={{ md: "1px solid", base: "none" }} borderColor="gray.200">
    <Flex align="center" mb="2">
      <Icon as={FaRegClock} boxSize={6} color="teal.400" mr="2" />
      <Text fontSize="lg" fontWeight="600" color="teal.400">
        Opening Hours
      </Text>
    </Flex>
    <Text fontSize="lg" fontWeight="400" color="gray.700">
      Monday to Saturday 10AM to 6PM
    </Text>
  </Box>
</SimpleGrid>

  <AspectRatio 
    ratio={16 / 9} /* Aspect Ratio of 16:9 */
    w="90%"
    h={{ base: "100%", md: "60%" }} /* Responsive height */
    borderRadius="md"
    boxShadow="md"
    m="5%"
  >
    <iframe
      loading="lazy"
      title="Manjeera Trinity Corporate Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3819654185877!2d78.39019027516727!3d17.489270683415363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f0295983495952f%3A0x94df29f879276511!2sIT%20Q%20HUB!5e0!3m2!1sen!2sin!4v1726309097632!5m2!1sen!2sin"
      style={{ border: 0 }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    />
  </AspectRatio>



      <Footer />
    </Box>
  );
}

