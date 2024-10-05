import React, { useEffect } from 'react';
import {ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Container,
  Button,
  SimpleGrid
} from '@chakra-ui/react';
import java from '../../Images/Java.png';
import phyton from '../../Images/Python.jpg';
// import aws from '../../Images/aws.png';
import uiux from '../../Images/ui-ux.jpg';
import webdev from '../../Images/wd.jpg';
import medicalcoding from '../../Images/mc.jpeg';
import DigitalMarketing from '../../Images/dm.jpg'
import announcement from '../../Images/speaker.png';
// import BIM from '../../Images/BIM.png'
// import Sap from '../../Images/SAP-FICO.jpg'
// import Testing from '../../Images/testing.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const courses = [
  {
    title: 'UI / UX Design',
    image: uiux,
    link: ''
  },

  {
    title: 'Web Development',
    image: webdev,
    link: ''
  },
  
  {
    title: 'Python Full Stack',
    image: phyton,
    link: ''
  },
 
  {
    title: 'Java Full Stack',
    image: java,
    link: ''
  },
 
 
  {
    title: 'Social Media Marketing',
    image: DigitalMarketing,
    link: ''
  },
  {
    title: 'Medical Coding',
    image:medicalcoding,
    link: ''
  }
];

const CourseCard = ({ title,image,link }) => (
  <Box
    m="5"
    borderWidth={1}
    borderRadius="md"
    overflow="hidden"
    shadow="md"
    _hover={{ shadow: 'lg' }}
     data-aos="fade-up"  data-aos-delay="1000"  data-aos-duration="1000"
  >
    <Link href={link} _hover={{ textDecoration: 'none' }}>
      <Image src={image} alt={title} borderRadius="md" 
       h={{lg:"200px"}} objectFit="cover"/>   
      <Box mt={2} p={3} textAlign="center" mx="auto">
        <Heading mt={2} fontSize={{base:"0.8em" , md:"1.1em"}} fontWeight="480" 
        fontFamily= "Jost , sans-serif" >
          <Link href={link} color="#000">
            {title}
          </Link>
        </Heading>
        <Box display="flex" alignItems="center"
         justifyContent="center" alignContent="center"
          mt="2" textAlign="center">
  <Text fontSize={{ base: "0.7em", md: "0.9em" }} color="gray.500">
    Only Limited Seats Available.
  </Text>
</Box>

        <Box textAlign="center" mt={3} justifyContent="center" alignContent="center">
                <Link href="/contactus">
                  <Button bgColor="#2b3ddb" color="#fff" 
                  _hover={{bgColor:"#2b3ddb" ,
                    color:"#fff" , mt:"1"}}
                  fontSize={{base:"0.1em" , md:"1em" ,lg:"0.8em"}} 
                  rightIcon={<ArrowRightIcon />}>
                   Enquire Now
                  </Button>
                </Link>
              </Box>
      </Box>
    </Link>
  </Box>
);

const PopularCourses = () => {
  
  useEffect(() => {
    const aosInit = () => {
      Aos.init({ once: false });
      Aos.refresh();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("load", aosInit);
    }
  }, []);
  

  return (
    <Container maxW="container.xl" py={8}>
      <Heading
        as="h2"
        size="xl"
        mb={10}
        color="#000"
        textAlign="center"
        position="relative"
               fontWeight="500"
               letterSpacing="1px"
        _after={{
          content: '""',
          display: "block",
          width: "11%",
          height: "4px",
          backgroundColor: "#ffa41b",
          position: "absolute",
          bottom: "-12px",
          left: 0,
          right: 0,
          margin: "auto",
          borderRadius: "50%",
        }}
      >
        Our Courses
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} >
        {courses.map((course) => (
          <Box key={course.title}  mx="auto">
            <CourseCard {...course}  />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PopularCourses;
