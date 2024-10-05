import React from 'react';
import { Box, Flex, Text, Heading,SimpleGrid,Image } from '@chakra-ui/react';
import img1 from '../../Images/img1 (1).png'
import img2 from '../../Images/img1 (2).png'
import img3 from '../../Images/img1 (3).png'
import img4 from '../../Images/img1 (4).png'
import img5 from '../../Images/img1 (5).png'
import img6 from '../../Images/img1 (6).png'
import img7 from '../../Images/img1 (7).png'
import img8 from '../../Images/img1 (8).png'


export default function WhyWeAre() {
  const features = [
    {
      id: '01',
      title: 'Well Planned Curriculum',
      description: 'Curriculum is created on the latest industry trends and on learning objectives that keeps you updated.',
      imageSrc: img1,
      bg: '#525FE1',
      color: 'white',
      link: '/course',
    },
    {
      id: '02',
      title: 'Learn from Industry Experts',
      description: 'Learn from top-level industry experts to gain more knowledge and better job opportunities.',
      imageSrc: img2,
      bg: 'white',
      color: 'black',
      link: '/course',
    },
    {
      id: '03',
      title: 'Assessments',
      description: 'Students are evaluated to understand their progress through test and assignments.',
      imageSrc: img3,
      bg: '#525FE1',
      color: 'white',
      link: '/course',
    },
    {
      id: '04',
      title: 'Interview Preparation',
      description: 'We provide communication & job ready skills to our students to express their skills professionally, which helps them get job quickly.',
      imageSrc: img4,
      bg: 'white',
      color: 'black',
      link: '/course',
    },
    {
      id: '05',
      title: 'Real Time IT Industry Exposure',
      description: 'Real time industry experience is provided to our students to understand & experience real work environment.',
      imageSrc: img5,
      bg: 'white',
      color: 'black',
      link: '/course',
    },
    {
      id: '06',
      title: 'Internship Programs',
      description: 'Get Internship opportunities, we provide you with industry experience through our internship program.',
      imageSrc: img6,
      bg: '#525FE1',
      color: 'white',
      link: '/course',
    },
    {
      id: '07',
      title: 'Valid International Certification',
      description: 'Get International valid certification which adds value to your CV and helps to get the right job.',
      imageSrc: img7,
      bg: 'white',
      color: 'black',
      link: '/course',
    },
    {
      id: '08',
      title: 'Placement Assistance',
      description: 'Get placed at reputed organizations, we help you develop all the skills that every industry expects from a candidate.',
      imageSrc: img8,
      bg: '#525FE1',
      color: 'white',
      link: '/course',
    },
  ];

 
  return (
    <Box bgSize="cover" bgPosition="center" >
        <Flex flexDirection="column" >
      <Flex
        direction="column"
        align="center"
        w="full"
        >
      
  <Box p={16} px={{ base: '4', md: '8' }}  >
      <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" color="#000" letterSpacing="1px"
         fontWeight="500">
          Why ITqHub?
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} p="1% 10%">
      {features.map((feature, index) => (
        <Box
          key={index}
          bg={feature.bg}
          color={feature.color}
          borderRadius="md"
          boxShadow="lg"
          p="2% 10%"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          textAlign="left"
          position="relative" // Ensure this is set to make the Heading position relative to this Box
          overflow="hidden" // Ensure that any content exceeding the box bounds is clipped
          maxW="100%" // Ensure the box doesn't exceed the grid column width
          transition="transform 0.3s ease-in-out" // Smooth transition
          _hover={{ transform: 'translateY(-8%)' }} // Move up on hover
        >
          <Image src={feature.imageSrc} alt="" width="99px" height="85px" m={4} /> 
          <Heading 
            as="h3" 
            size="md" 
            position="absolute" 
            top="0" 
            left="0" 
            bgColor="#fc6d14" 
            padding="8px" 
            borderRadius="0% 90% 90% 0% / 0% 0% 50% 0%" 
            color="#fff"
            zIndex="1" // Ensure it's above other content
          >
            {feature.id}
          </Heading>
          
          <Heading fontSize={{base:"1.05em" , md:"1.15em"}} size="md" mb={4} mt={6}> {/* Add margin-top to ensure the heading isn't covered */}
            {feature.title}
          </Heading>
          <Text mb={4} fontWeight="300" fontSize="0.9em">{feature.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
    </Box>
      </Flex>
      </Flex>
    </Box>
  );
};




