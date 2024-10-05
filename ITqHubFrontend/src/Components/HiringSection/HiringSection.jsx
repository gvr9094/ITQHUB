import {
    Box,
    Container,
    Heading,
    Image,
    Stack
  } from '@chakra-ui/react';
  import React from 'react'; 
  import company1 from '../../Images/company-1.png';
  import company2 from '../../Images/company-2.png';
  import company3 from '../../Images/company-3.png';
  import { keyframes, css } from '@emotion/react';
  
  export default function HiringSection () {

    const copmpanyDetails =[{img: company1},
        {img:company2},
        {img:company3}
    ]

    const marqueeKeyframes = keyframes`
  0% { transform: translateX(-10%); }
  100% { transform: translateX(-75%); }
`;

    return (
      <Box mb={{base:"10%" , md:"7%"}} mt={{base:"10%" , md:"7%"}} overflowX="hidden">
        <Container maxW="container.xl">
          <Stack>
            <Box textAlign="center">
              <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color="#000"
               position="relative"
               letterSpacing="1px"
               fontWeight="500"
               mb="3%"
            
               _after={{
                 content: '""',
                 display: "block",
                 width: "16%",
                 height: "4px",
                 backgroundColor: "#ffa41b",
                 position: "absolute",
                 bottom: "-10px",
                 left: 0,
                 right: 0,
                 margin: "auto",
                 borderRadius: "50%",
               }}
              >
                Our ITqHub Learners Work Here!
              </Heading>
            </Box>
  
            {/* Marquee Section */}
            <Box  
                width= "100%">
                    <Box
              display="block"
              alignItems="center"
              css={css`
                display: block;
                animation: ${marqueeKeyframes} 20s linear infinite;
              `}
            >
     {copmpanyDetails.map((company , index) => (
              <Box display={"block"} >
                <Image key={index} src={company.img} alt="Company " 
                minW={{sm:"200vw" ,md:"150vw"}} 
                h={{base:"40px",md:"85px"}} p={"1%"} 
               objectFit="fill" />
              </Box>
                ))}
            </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  
  


 