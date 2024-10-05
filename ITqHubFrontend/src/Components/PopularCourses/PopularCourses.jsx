import React, { useEffect } from 'react';
import {ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Container,
  Button
} from '@chakra-ui/react';
import java from '../../Images/java.jpg';
import phyton from '../../Images/phyton.jpeg';
import aws from '../../Images/aws.png';
import dataScience from '../../Images/data-science.jpg';
import DigitalMarketing from '../../Images/Digital-Marketing.jpg'
import BIM from '../../Images/BIM.png'
import Sap from '../../Images/SAP-FICO.jpg'
import Testing from '../../Images/testing.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const courses = [
  {
    title: 'Full Stack Java',
    image: java,
    link: ''
  },
  {
    title: 'Full Stack Python',
    image: phyton,
    link: ''
  },
  {
    title: 'AWS+DEVOPS',
    image: aws,
    link: ''
  },
  {
    title: 'Data Science',
    image: dataScience,
    link: ''
  },
  {
    title: 'Digital Marketing',
    image: DigitalMarketing,
    link: ''
  },
  {
    title: 'BIM',
    image: BIM,
    link: ''
  },
  {
    title: 'SAP FICO',
    image: Sap,
    link: ''
  },
  {
    title: 'Testing',
    image: Testing,
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
     data-aos="flip-right"  data-aos-delay="500"  data-aos-duration="1500"
  >
    <Link href={link} _hover={{ textDecoration: 'none' }}>
      <Image src={image} alt={title} borderRadius="md" 
        width="400px" 
        height="200px" borderStyle="none" objectFit="cover"/>
      <Box mt={2} p={3}>
        <Heading as="h3" size="md" mt={2} fontWeight="480">
          <Link href={link} color="blue">
            {title}
          </Link>
        </Heading>
        <Text mt="4">The Course is designed to....</Text>
        <Box textAlign="left" mt={1}>
                <Link href="" isExternal>
                  <Button bgColor="#fff" color="#000"
                  _hover={{bgColor:"blue" ,  padding:"5" 
                    ,color:"#fff" , mt:"1"}}
                  fontSize="sm" padding="0px"
                  rightIcon={<ArrowRightIcon />}>
                    Know More
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
    <Container maxW="container.xl" py={10}>
      <Flex wrap="wrap" >
        {courses.map((course) => (
          <Box key={course.title}  mx="auto"
          w={{ base: '85%', md: '45%', lg: '24.5%' }}>
            <CourseCard {...course}  />
          </Box>
        ))}
      </Flex>
      {/* <Flex justify="center" mt={6}>
        <Button
          as={Link}
          href="/course"
          bgColor="blue"
          color="#fff"
          variant="solid"
          leftIcon={<i className="fa fa-book" />}
        >
          View All Courses
        </Button>
      </Flex> */}
    </Container>
  );
};

export default PopularCourses;
