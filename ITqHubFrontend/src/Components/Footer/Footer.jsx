import React from 'react'; 
import { Box, Image, Text, Link, Stack, HStack, Icon , Flex} from '@chakra-ui/react';
import logo from '../../Images/Footer_Logo.png'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import FooterBottom from '../CopyRight/CopyRight';

export default function Footer()  {
  const sparkAnimation = `
@keyframes spark {
  0% { top: -10vh; }
  100% { top: 100%; }
}
`;
  return (
    <Box bg="#272D38" color="white" >
      <Stack d="flex" direction={{base:"column" ,md:"row"}} 
      p={{base:"5% 5%" ,sm:"5% 5%" , md:"5% 5%" , lg:"3% 0%"}} 
      spacing={{base:"4" ,md:"10"}} maxW="container.xl" mx="auto">
        {/* First Column */}
        <Box w={["100%" , "100%" , "30%"]} >
        <Flex as="a" href="/" alignItems="center" color={"#fff"} >
          <Image  w={70} src={logo} />
          <Text fontSize="1.5em" fontWeight="700" >ITqHub</Text>
        </Flex>
          <Text mb={4}>
          ITqHub serves the best IT Training that is crafted based on the extensive
           research made on learning, course curriculum, learning outcomes, job search, and placement rates in MNCs.
          </Text>
          <HStack spacing={3}>
            <Link href="#" isExternal>
              <Icon as={FaFacebookF} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedinIn} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaPinterestP} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
          </HStack>
        </Box>
        <Box
position="relative"
width="0.5px"
overflow="hidden"
border="1px solid #"
filter="brightness(500%)"
>
<Box
  as="span"
  position="absolute"
  width="1px"
  height="10vh"
  backgroundColor="#FFFFFF"
  animation="spark 1.5s linear infinite"
  filter="brightness(200%)"
/>
<style jsx global>{sparkAnimation}</style>
</Box>
        {/* Second Column */}
        
        <Box>
          <Text fontSize="xl" mb={4} fontWeight="bold">Our Courses</Text>
          <Stack spacing={2}>
           <Link href="" isExternal>UI / UX Design</Link>
            <Link href="" isExternal>Web Development</Link>
            <Link href="" isExternal>Java Full Stack</Link>
            <Link href="" isExternal>Python Full Stack</Link> 
          </Stack>
        </Box>
        <Box
position="relative"
width="0.5px"
overflow="hidden"
border="1px solid #"
filter="brightness(500%)"
>
<Box
  as="span"
  position="absolute"
  width="1px"
  height="10vh"
  backgroundColor="#FFFFFF"
  animation="spark 1.5s linear infinite"
  filter="brightness(200%)"
/>
<style jsx global>{sparkAnimation}</style>
</Box>

        {/* Third Column */}
        <Box w={["100%" , "100%" , "30%"]}>
          <Text fontSize="xl" mb={4} fontWeight="bold">Contact Info</Text>
          <Stack spacing={4}>
            <HStack spacing={2}>
              <Icon as={MdLocationOn} boxSize={6} />
              <Text>Unit 114 , Manjeera Trinity Corporate , KPhb , Hyderabad , Telangana.</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={MdPhone} boxSize={6} />
              <Link href="tel:+919281433642">+91 9281433642</Link>
            </HStack>
            <HStack spacing={2}>
              <Icon as={MdEmail} boxSize={6} />
              <Link href="gmailto:info@itqhub.com">info@itqhub.com</Link>
            </HStack>
          </Stack>
        </Box>
        <Box
position="relative"
width="0.5px"
overflow="hidden"
border="1px solid #"
filter="brightness(500%)"
>
<Box
  as="span"
  position="absolute"
  width="1px"
  height="10vh"
  backgroundColor="#FFFFFF"
  animation="spark 1.5s linear infinite"
  filter="brightness(200%)"
/>
<style jsx global>{sparkAnimation}</style>
</Box>
         {/* Fourth Column */}
        <Box>
          
           <Stack spacing={2}>
           <Link href="/aboutus">About Us</Link>
            <Link href="/contactus">Contact Us</Link>
          </Stack> 
        </Box>    
      </Stack>
      {/* <FooterBottom/> */}
    </Box>
  );
};








