import React from 'react';
import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import timerBg from '../../Images/timerbg.jpg';

// Function to handle countdown rendering
const Countdown = ({ deadline }) => {
  return (
    <Box display="flex" justifyContent="center" 
    alignItems="center" p={1} >
      <CountdownCircleTimer
        isPlaying
        duration={deadline}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[10, 5, 2, 0]}
        strokeWidth={0}  // Set stroke width to 0 to hide the circle
      >
        {({ elapsedTime }) => {
          const timeLeft = deadline - elapsedTime;
          const days = Math.floor(timeLeft / (3600 * 24));
          const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
          const minutes = Math.floor((timeLeft % 3600) / 60);
          const seconds = Math.floor(timeLeft % 60);

          return (
            <Flex direction={'row'} justifyContent="center" alignItems="center">
              {[{ value: days, label: 'Days' }, { value: hours, label: 'Hours' }, 
              { value: minutes, label: 'Minutes' }, { value: seconds, label: 'Seconds' }]
                .map((unit, index) => (
                  <Flex key={index} direction="row" alignItems="center" m="1">
                    <Flex direction="column" bgColor="#fff" p="2" textAlign="center" 
                    borderRadius="md" boxSize={{ base: '87px', md: '100px' }}>
                      <Text fontSize="2xl" fontWeight="bold" color="#ff6302">{unit.value}</Text>
                      <Text fontSize={{base:"sm" , md:"md"}} fontWeight="550" color="#000">{unit.label}</Text>
                    </Flex>
                    {/* Show separator only if it's not the last unit */}
                    {index < 3 && (
                      <Box as='text' 
                       fontSize={{base:"3xl", md:"4xl"}} fontWeight="bold" p={{base:"1" , md:"2"}} color="#FFF">:</Box>
                    )}
                  </Flex>
                ))}
            </Flex>
          );
        }}
      </CountdownCircleTimer>
    </Box>
  );
};

const UpcomingCoursesSection = () => {
  // Customize deadline (seconds) as needed
  const deadline = 60 * 60 * 24 * 10; // Example: countdown for 10 days

  return (
    <Box bgImage={timerBg} bgPosition="center center" bgSize="cover" py={8} px={4} color="#fff" filter="saturate(120%)">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={8}>
          <Text fontSize="sm" fontWeight="800" mb="6">UPCOMING COURSES</Text>
          <Heading as="h3" size="lg">Interested In Joining the Next Batch</Heading>
        </Box>
        <Countdown deadline={deadline} />
      </Container>
    </Box>
  );
};

export default UpcomingCoursesSection;