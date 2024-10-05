import React from 'react'
import { Box, Container ,VStack , SimpleGrid, Image, Icon,
    Heading, Text } from "@chakra-ui/react";
import HiringCompaniesSection from '../../Components/HiringSection/HiringSection.jsx'
import { FaBookOpen, FaUser } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";
import HeaderBg from '../../Images/pagesBg.jpg';
import aboutGirlBg from '../../Images/About-girlBg.jpg'
import shape1 from '../../Images/shape1.png';
import shape2 from '../../Images/shape2.png';
import shape3 from '../../Images/shape3.png';
import shape4 from '../../Images/shape4.png';
import shape5 from '../../Images/shape5.png';
import AppBar from '../../Components/AppBar/AppBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Recognizationfrom from '../../Components/RecognisationFrom/RecognisationFrom.jsx';
import WhyWeAre from '../../Components/WhyWeAre/WhyWeAre.jsx';
import StudentPlacementRecords from '../../Components/StudentPlacementRecords/StudentPlacementRecords.jsx';

function About() {

    function IconBox({ icon, title }) {
        return (
          <Box display="flex" m="2% 0%" alignItems="center"  alignContent="center" justifyContent="center">
            <Box>
              <Icon
                as={icon}
                boxSize={10}
                color="#F86F03"
                backgroundColor="#FB7C5626"
                padding="10px"
                borderRadius="20%"
              />
            </Box>
            <Text size="md" flexGrow={1} pl="5%" 
            fontSize={{base:"0.9em" , md:"0.9em"}} fontWeight="650" pb="2%">
              {title}
            </Text>
          </Box>
        );
      }

  return (
    <Box>
      <AppBar />
      {/* Page Title About Us */}

      <Box bgImage={HeaderBg} p={{base:"8%" , md:'2%'}} >
        <Container maxW="container.xl">
          <VStack spacing={6} align='left' >
          <Text textAlign={{ base: "center", md: "left" }}
                fontSize={{base:"3xl",md:"5xl"}}
                fontWeight='600'
                mily="Jost, Sans-serif">About Us</Text>
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
       
       {/* page hero section1*/}

    <Box pt="80px" pb="40px" position="relative" > 
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems="center" spacing={10}>
          <Box>
              <Image src={aboutGirlBg} alt="image" />
          </Box>

          <Box w={{sm:"90%" , md:"100%"}} mx="auto">
            <Text as="span" color="#4764E6" fontWeight="bold" fontSize="lg">ITqHub</Text>
            <Heading as="h2" size="xl" my={4}>
              Develop Your Skills, Learn Something New, and Grow Your Career!
            </Heading>
            <Text mb={6}>
              With a network of skilled professionals from many different fields, ITqHub helps students upgrade their skills according to industry demand. We train people to work in the industry in a way that helps them move up their career ladder faster. We give students the skills that are needed in every industry.
            </Text>
            <SimpleGrid columns={{ base: 1 , md: 2 }} spacing={{base:"none", md:8}}>
            <Box>
        <IconBox icon={FaUser} title="Learn From Industry Experts" />
        <IconBox icon={FaBookOpen} title="Practical Oriented Learning" />
           </Box>
           <Box>
        <IconBox icon={BsClockHistory} title="Internship" />
        <IconBox icon={GrDocumentUser} title="Well Designed Curriculum" />
          </Box>
    </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Shape Decorations */}
      <Box position="absolute" top="10%" left="10%" zIndex="-1">
        <Image src={shape1} alt="shape1" />
      </Box>
      <Box position="absolute" top="12%" right="12%" zIndex="-1">
        <Image src={shape5} alt="shape2" filter="saturate(205%)" />
      </Box>
      {/* <Box position="absolute" bottom="0" right="0" zIndex="-1">
        <Image src="assets/img/shape3.png" alt="shape3" />
      </Box>
      <Box position="absolute" bottom="10%" right="10%" zIndex="-1">
        <Image src="assets/img/shape4.png" alt="shape4" />
      </Box> */}
 </Box>

  {/* section 2 mission & vision */}

 <Box bg="#fef8ef" mb="3%" p="4% 0%">
 <SimpleGrid columns={{ base: 1, lg: 2 }}  
 spacing={"20"}  w={{base:"85%",md:"80%"}} mx="auto" >
      <Box>
        <Text fontWeight="700" fontSize="3xl" mb={4} textAlign="center">
          Mission
        </Text>
        <Text color="gray.500" fontSize="md" textAlign="justify">
          ITqHub mission is to empower students and working professionals 
          through cutting-edge software education and training. We foster a dynamic
           learning milieu that encourages creativity, critical thinking, and technical
            proficiency. By providing universal technical education and comprehensive assistance, 
            we develop and transform our students into talented professionals capable of thriving 
            in the ever-changing technology field.
        </Text>
      </Box>
      <Box>
      <Text fontWeight="700" fontSize="3xl" mb={4} textAlign="center">
          Vision
        </Text>
        <Text color="gray.500" fontSize="md" textAlign="justify">
          Our vision is to be the leading software training institute in India, recognized for our commitment to 
          excellence in education and career development. We aspire to continuously 
          innovate our curriculum, expand our reach, and foster a community of lifelong 
          learners who are equipped to meet the challenges of the digital age. Through strong
         industry partnerships and a focus on holistic development.   {/* we aim to shape the future of 
           technology and contribute to the growth of the global tech ecosystem. */}
        </Text>
      </Box>
    </SimpleGrid>
    </Box>
     <Box> <WhyWeAre/> </Box>
    <Box> <Recognizationfrom/> </Box>
    <Box> <StudentPlacementRecords/> </Box>
    {/*<Box> <HiringCompaniesSection/> </Box> */}
      <Footer/>
    
    </Box>
  )
}

export default About


// <UnorderedList spacing={3}>
//               <ListItem>Learn From Industry Experts</ListItem>
//               <ListItem>Internship</ListItem>
//               <ListItem>Practical Oriented Learning</ListItem>
//               <ListItem>Well Designed Curriculum</ListItem>
//             </UnorderedList>