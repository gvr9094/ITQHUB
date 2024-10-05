
import React ,{useState}from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import featuresBg from '../../Images/home-cta.jpg'
import { BsPersonCircle } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default function Features(){

const OurDetails = [
    { Icon: BsPersonCircle, count: 1500 ,  tiitle:"Students Enrolled"},
    { Icon: AiFillSafetyCertificate, count: 1275 , tiitle:"Certified Students"},
    { Icon: BiSolidBriefcaseAlt2, count: 1050 , tiitle:"Students Placed"},
    { Icon: FaMedal, count: 258 , tiitle:"Hiring Partners" }
  ];

  const [hasCounted, setHasCounted] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible && !hasCounted) {
      setHasCounted(true);
    }
  };


return(
<Flex justifyContent={"space-between"} w="100%" wrap={"wrap"} mb="5%"
       bgImage={featuresBg} p="0% 8%"
       bgSize="cover"
       bgPosition="center"
       bgRepeat="no-repeat"
       position="relative"
       maxW="100vw" filter="saturate(260%)" >
        {OurDetails.map((category, index) => (
          <Box key={index} mb={{ base: 4, md: 0 }} mr={{ base: 3, md: 0}} 
          boxSize={{base:"160px" ,md:"260px"}} textAlign="center" p="5% 1%">
            <Icon as={category.Icon} boxSize={{base:"40px" ,md:"50px"}} mb={2} color="#FFFFFF" />
            <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
              {({ isVisible }) => (
                <Box display={"block"} >
                    <Text fontSize="2xl" fontWeight="800" color="yellow">
                    <CountUp
                      start={hasCounted ? 0 : null}
                      end={category.count}
                      duration={7}
                      className="countup" 
                    />+</Text>
                  <Text fontSize="1em"  color="#fff" fontWeight="500">
                     {category.tiitle}
                  </Text>
                </Box>
              )}
            </VisibilitySensor>
          </Box>
        ))}
      </Flex>
)
}