import React from 'react';

import {Box,  Text,  Container, Image, VStack} from '@chakra-ui/react';
import shape1 from '../../Images/shape1.png';
import shape2 from '../../Images/shape2.png';
import shape3 from '../../Images/shape3.png';
import shape4 from '../../Images/shape4.png';
import shape5 from '../../Images/hero-section-vector4.svg'
import shape6 from '../../Images/hero-section-vector2.svg'
import HeaderBg from '../../Images/pagesBg.jpg';
import contactMe from '../../Images/contact-me.jpg';
import Navbar from '../../Components/AppBar/AppBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import NextBatchTimer from '../../Components/NextBatchTimer/NextBatchTimer.jsx';
import PopularCourses from '../../Components/CourseCategories/CourseCategories.jsx';
import HubSpotForm from '../../Components/HubSpotForm/HubSpotForm.jsx';
import FaQuestion  from '../../Components/FaQuestion/FaQuestion.jsx'

function Courses() {

  return (
    <Box>
      <Navbar/>
      <Box bgImage={HeaderBg} p={{base:"8%" , md:'1.5%'}} >
        <Container maxW="container.xl">
          <VStack spacing={6} align='left' >
          <Text textAlign={{ base: "center", md: "left" }}
                fontSize={{base:"3xl",md:"5xl"}}
                fontWeight='600'>Courses</Text>
            <Box display={{base:"none", md:"block"}} position="relative" w="100%">
              <Box position="absolute" left="0%">
                <Image src={shape1} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" top="-129" left="70%">
                <Image src={shape2} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" bottom={3} right={0}>
                <Image src={shape3} alt="Breadcrumb Abstract Shape" />
              </Box>
              <Box position="absolute" bottom="4%" left="50%" boxSize="50px">
                <Image src={shape4} alt="Breadcrumb Abstract Shape" />
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
      <PopularCourses/>
      <NextBatchTimer/>
      <FaQuestion/>
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
        </Box>
      </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Courses
