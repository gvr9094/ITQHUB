import React from 'react';
import { Box, SimpleGrid, Image, Heading } from '@chakra-ui/react';
import client1 from '../../Images/client1.png'
import client2 from '../../Images/client2.png'
import client3 from '../../Images/client3.png'
import client4 from '../../Images/client4.png'
import client5 from '../../Images/client5.png'
import client6 from '../../Images/client6.png'
import client7 from '../../Images/client7.png'
import client8 from '../../Images/client8.png'
import client9 from '../../Images/client9.png'
import client10 from '../../Images/client10.png'
import client11 from '../../Images/client11.png'
import client12 from '../../Images/client12.png'
import client13 from '../../Images/client13.png'
import client14 from '../../Images/client14.png'
import client15 from '../../Images/client15.png'
import client16 from '../../Images/client16.png'

const FeaturedIn = () => {
  const images = [
   client1 , client2 , client3 , client4 ,client5 , client6 , client7 , client8,
   client9 , client10 , client11 , client12 ,client13 , client14 , client15 , client16
  ];

  return (
    <Box p="2% 10%">
      <Box textAlign="center" mb={8}>
        <Heading  as="h2"
        size="xl"
        m={3}
        color="black"
        position="relative"
          fontWeight="450"
          letterSpacing="1px"
        _after={{
          content: '""',
          display: "block",
          width: "8%",
          height: "4px",
          backgroundColor: "#ffa41b",
          position: "absolute",
          bottom: "-10px",
          left: 0,
          right: 0,
          margin: "auto",
          borderRadius: "50%",
        }}>
          Featured In
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={4} px={4}>
        {images.map((src, index) => (
          <Box key={index} display="flex" alignItems="center" justifyContent="center">
            <Image src={src} alt={`Featured ${index + 1}`} boxSize="130px"
             objectFit="contain" filter="saturate(106%) contrast(135%)"/>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedIn;


