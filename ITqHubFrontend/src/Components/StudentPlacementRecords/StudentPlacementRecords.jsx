import React from 'react';
import { Box, Flex, Image, Text, Button, Stack , Heading} from '@chakra-ui/react';
import { keyframes, css } from '@emotion/react';
import blueIcon from '../../Images/blue-icon.svg'
import Placement from '../../Images/placement.png';
import img1 from '../../Images/Abhilash.jpg';
import img2 from '../../Images/Anusha.jpg';
import img3 from '../../Images/balaji.png';
import img4 from '../../Images/chakravarthi.jpg';
import img5 from '../../Images/deepika.png';
import img6 from '../../Images/palak tripathi.jpeg';
import img7 from '../../Images/Tejaswi.jpeg';
import img8 from '../../Images/shivani.jpg';
import img9 from '../../Images/venkatesh.png';
import img10 from '../../Images/vijay.jpg';
import img11 from '../../Images/Ramya Microsoft.jpg';
import img12 from '../../Images/sathish.png';
import img13 from '../../Images/Jagadeeshwari.jpg';
import img14 from '../../Images/Manikanta.png';
import img15 from '../../Images/nagendra teja.png';
import img16 from '../../Images/Manohar.png';
import img17 from '../../Images/deepika.png';
import img19 from '../../Images/ramesh vanka.jpg';
import img20 from '../../Images/kalyani.jpg';
import img21 from '../../Images/sai krishna.png';
import img22 from '../../Images/sai pavan.png';
import img23 from '../../Images/sekhar.jpg';
import img24 from '../../Images/Sunil.jpg';
import img25 from '../../Images/Gunasekhar.jpg';

const slideRightToLeft = keyframes`
  0% { transform: translate(30%); }
  100% { transform: translateX(-30%); }
`;

const slideLeftToRight = keyframes`
  0% { transform: translateX(-30%); }
  100% { transform: translateX(30%); }
`;

const slideData1=[{img:img1 , name: "Abilash" , designation:"Fullstack Js" , company:"Vedhik Systems" },
    {img:img2 , name: "Anusha" , designation:"Digital Marketing" , company:"DRK systems" },
    {img:img3 , name: "Balaji" , designation:"Web Developer" , company:"cognizant" },
    {img:img10 , name: "Vijay" , designation:"Phyton" , company:"Cye Technologies" },
    {img:img25 , name: "Gunasekhar" , designation:"Testing" , company:"Temino" },
    {img:img7 , name: "Tejaswi" , designation:"Fullstack Js" , company:"Vedhik Systems" },
    {img:img8 , name: "Shivani" , designation:"Digital Marketing" , company:"DRK systems" },
    {img:img9 , name: "Venkatesh" , designation:"Web Developer" , company:"cognizant" },
    {img:img23 , name: "Sekhar" , designation:"Phyton" , company:"Cye Technologies" },
    {img:img19 , name: "Ramesh vanka" , designation:"UI/UX Designer" , company:"DRK systems" },
    
    
  ]
  
  const slideData2=[
    
    {img:img11 , name: "Ramya" , designation:"Medical Coding" , company:"Temino" },
    {img:img12 , name: "Sathish" , designation:"Fullstack Java" , company:"Kapil Technologies" },
    {img:img13 , name: "Jagadeeshwari" , designation:"Fullstack Js" , company:"Vedhik Systems" },
    {img:img14 , name: "manikanta" , designation:"Digital Marketing" , company:"DRK systems" },
    {img:img15 , name: "Narendra Teja" , designation:"Python Developer" , company:"cognizant" },
    {img:img16 , name: "Manohar" , designation:"UI/UX Designer" , company:"Cye Technologies" },
    {img:img21 , name: "Sai Krishna" , designation:"Medical Coding" , company:"Temino" },
    {img:img20 , name: "Kalyani" , designation:"Java Fullstack " , company:"Kapil Technologies" },
    {img:img4 , name: "Chakravarthi" , designation:"Phyton Fullstack" , company:"Cye Technologies" },
    {img:img6 , name: "palak Tripathi" , designation:"Java Fullstack" , company:"Kapil Technologies" },
  ]
 
  const slideData3=[
    {img:img16 , name: "Chakravarthi" , designation:"Phyton" , company:"Cye Technologies" },
    {img:img8 , name: "Shivani" , designation:"Digital Marketing" , company:"DRK systems" },
    {img:img5 , name: "Deepika" , designation:"Web Developer" , company:"cognizant" },
    {img:img1 , name: "Abilash" , designation:"Java Fullstack" , company:"Vedhik Systems" },
    {img:img2 , name: "Anusha" , designation:"Digital Marketing" , company:"DRK systems" },
    {img:img3 , name: "Balaji" , designation:"Phyton Fullstack" , company:"cognizant" },
    {img:img24 , name: "Sunil" , designation:"Medical Coding" , company:"Cye Technologies" },
    {img:img22 , name: "Sai Kiran" , designation:"UI/UX Designer" , company:"Temino" },
    {img:img6 , name: "palak Tripathi" , designation:"Java Fullstack" , company:"Kapil Technologies" },
  ]

const StudentProfile = () => {
  return (
    <Box bg="#ECF4F8" >
    <Box bgPosition="50% center"
         bgImage={Placement}  bgSize="cover"p={4} mb={4} overflow="hidden">
        <Heading
        as="h2"
        fontSize={{base:"1.5em" , md:'2em'}}
        m="2%"
        mb="5% !important"
        color="black"
        letterSpacing="1px"
        textAlign="center"
        fontWeight="600">
        We Have Created thousands of professionals
      </Heading>
        <Box display={{base:"block",md:"flex"}}
          p="0% 2%" alignItems="center">
      <Stack spacing={4} align="left" mb={4} minW={"400px"}>
        <Text fontSize="md">Recruited by 300+ companies</Text>
        <Text fontSize="2xl" color="blue" fontWeight="800" >₹18 LPA</Text>
        <Text fontSize="sm" fontWeight="550"  >Highest package</Text>
        <Flex> <Image src={blueIcon}/>
        <Text fontSize="sm" fontWeight="350" ml="2%">Next batch coming soon</Text></Flex>
        <Button bgColor="blue" color="#fff" p="0px" mt="2%" maxW="30%">Enroll Now</Button>
      </Stack>
      <Flex align="center" overflow="hidden" direction="column">
        <Box whiteSpace='no-wrap' willChange="transform"
          css={css`
            display: flex;
            animation: ${slideRightToLeft}  20s linear infinite;
            animation: ${slideRightToLeft} 20s linear infinite;
          `}
        >
          {slideData1.map((slide, index) => (
            <Box
              key={index}
              minW="230px"
              bg="white"
              p={3}
              m={2}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              alignItems="center"
            >
              <Image
                src={slide.img}
                alt={slide.name}
                borderRadius="full"
                boxSize="63px"
                objectFit="cover"
                mr={3}
              />
              <Box fontSize="sm">
                <Text fontWeight="bold">{slide.name}</Text>
                <Text>{slide.designation}</Text>
                <Text>{slide.company}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          css={css`
            display: flex;
            animation: ${slideLeftToRight}  20s linear infinite;
            animation: ${slideLeftToRight} 20s linear infinite;
          `}
        >
          {slideData2.map((slide, index) => (
            <Box
              key={index}
              minW="230px"
              bg="white"
              p={3}
              m={2}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              alignItems="center"
            >
              <Image
                src={slide.img}
                alt={slide.name}
                borderRadius="full"
                boxSize="63px"
                objectFit="cover"
                mr={3}
              />
              <Box fontSize="sm">
                <Text fontWeight="bold">{slide.name}</Text>
                <Text>{slide.designation}</Text>
                <Text>{slide.company}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          css={css`
            display: flex;
            animation: ${slideRightToLeft}  20s linear infinite;
            animation: ${slideRightToLeft} 20s linear infinite;
          `}
        >
          {slideData3.map((slide, index) => (
            <Box
              key={index}
              minW="230px"
              bg="white"
              p={3}
              m={2}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              alignItems="center"
            >
              <Image
                src={slide.img}
                alt={slide.name}
                borderRadius="full"
                boxSize="63px"
                objectFit="cover"
                mr={3}
              />
              <Box fontSize="sm">
                <Text fontWeight="bold">{slide.name}</Text>
                <Text>{slide.designation}</Text>
                <Text>{slide.company}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Flex>
      </Box>
    </Box>
    </Box>
  );
};

export default StudentProfile;
