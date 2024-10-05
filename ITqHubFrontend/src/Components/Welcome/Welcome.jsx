import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import { Typewriter } from 'react-simple-typewriter';

export default function Welcome() {
  const welcomeText1 = `
    Welcome to ITqHub, the best software training institute in Hyderabad, providing world-class education through well-researched, innovative, and ultra-modern strategies. 
    Our professional trainers and cutting-edge learning management system ensure that students receive an engaging and industry-aligned education. 
    We have designed more than fifty comprehensive advanced software courses to equip students with the latest tools and techniques. 
    We are fostering skills like critical thinking, problem-solving, and adaptability which play crucial roles in students' careers.
  `;
const welcomeText2 = `
  ITqHub the No. 1 software training institute in Hyderabad! Our goal is to offer job-oriented IT courses that prepare students for competitive job markets, 
  establishing them as leaders in their fields. Our curriculum is designed to stay up-to-date with the latest trends and technologies, 
  providing our students with a competitive edge in the software industry. `;

  return (
    <Box textAlign="center"
     p={{ base: "5%", md: "3% 9%" }}>
      <Heading
        as="h3"
        size="xl"
        m={{base:"8", md:"3"}}
        color="black"
        position="relative"
        letterSpacing="1px"
        fontWeight="500"
        _after={{
          content: '""',
          display: "block",
          width: "14%",
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
        Welcome to ITqHub!
      </Heading>
      <Text mt="3%" color="gray.500" fontWeight="400" fontSize={{ base: "0.9em", md: "1.1em" }}>
        <Typewriter
          words={[welcomeText1]}
          loop={1}
          cursor
          cursorStyle=''
          typeSpeed={10}
        />
      </Text>
      <Text mt="3%" color="gray.500" fontWeight="400" fontSize={{ base: "0.9em", md: "1.1em" }}>
        <Typewriter
          words={[welcomeText2]}
          loop={1}
          cursor
          cursorStyle=''
          typeSpeed={20}
        />
      </Text>
    </Box>
  );
}
