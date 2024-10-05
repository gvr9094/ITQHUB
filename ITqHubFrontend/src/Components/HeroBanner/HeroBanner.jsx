import React, { useEffect } from 'react';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import HeroBannerbg from '../../Images/home-banner.jpg';
import HeroBannerImg from '../../Images/heroBannerGirl2.png';
import HeroBannerImg1 from '../../Images/heroBannerGirl1.png';
import girlBg from '../../Images/hero_shape.png';
import Arrow from '../../Images/arrow.png';
import { FaArrowRightLong } from 'react-icons/fa6'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import Ripple from '../Ripple/Ripple';

export default function HeroBanner() {
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
    <Box
      bgImage={HeroBannerbg}
      p="0% 2%"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      maxW="100vw"
      maxH="auto"
      overflow="hidden"
      filter="saturate(115%)"
    >
      {/* Place Ripple here with absolute positioning */}
      <Box position="absolute" top={{base:"-10" , md:"5"}} left={{base:"0" , md:"20"}} width="100%" height="100%" zIndex={0}>
            <Ripple />
          </Box>

          <Box display={{base:"none" , md:"block"}}
           position="absolute" 
           left="-5"
           bottom="0"
           height= "160px"
           width= "100px"
           background= "orange"
           WebkitTransform = "skewX(45deg)"
           MsTransform= "skewX(45deg)"
           transform= "skewX(45deg)"
           opacity="0.3"
           /> 

     <Box zIndex="0" display={{base:"none" , md:"flex"}} position="absolute" top="-10" right="-5" h="150px" w="205px">
            <Image src={girlBg} />
    </Box>
    <Box zIndex="0" display={{base:"none" , md:"flex"}} position="absolute" top="-30" right="-2" h="150px" w="205px">
            <Image src={girlBg} />
    </Box>

      <Flex direction={{ base: "column", md: "row" }} alignItems="center" 
       justifyContent={{base:"center",md:"space-between"}} position="relative" top="9%">
        {/* Text Box */}
        <Box flex="1" display="flex" flexDirection="column"
          pt={{base:"4%" , md:"1%" , lg:"6%"}} // Adjust padding here
          pl={{base:"4%" , md:"2%" , lg:"10%"}} 
          pb="3%"
          position="relative" 
        >
          <Text
            m={3}
            fontWeight="800"
            fontSize={{ base: "0.7em", md: "0.8em" }}
            color="#2b3ddb"
            position="relative"
            letterSpacing="3px"
            ml="5%"
            _before={{
              content: '""',
              display: "flex",
              width: "8%",
              height: "1.8px",
              backgroundColor: "#525FE1",
              position: "absolute",
              top: "45%",
              left: "-5%",
              transform: "translateX(-50%)",
            }}
          >
            BUILD YOUR FUTURE WITH US
          </Text>
          <Text
            fontSize={{ base: "1.3em", md: "1.8em", lg: "2.2em" }}
            fontWeight="600"
            mb="3%"
          >
            Elevate your skills with <Text as="span" color="#ff873d">ITqHub.</Text>
             We transform you into a highly skilled Software Professional
          </Text>
          <Text
            fontSize={{ base: "0.9em", md: "1em", lg: "1.1em" }}
            fontWeight="380"
            color="#898596"
            mb="6%"
          >
            Join us to expand your knowledge, enhance your expertise, and ready to tackle any challenge.
          </Text>
          <Button
            as="a"
            href="/contactus"
            bg="#2b3ddb"
            border="1px solid #fff"
            color="white"
            fontSize={{base:"0.9em" , md:"1em"}}
            p={{base:"5%" , md:"3%"}}
            maxW="230px" // Adjust max width as needed
            w={{sm:"200px" , md:"230px"}}
            rightIcon={<FaArrowRightLong />}
          >
            Request a call today
          </Button>
        </Box>
        {/* Image Box */}
        <Box flex="1" display="flex" mt={{base:"none", md:"3%"}}
          position="relative" alignItems="flex-end"
        >
          <Box zIndex="1" position="relative" maxW="95%" mx="auto" >
            <Image src={HeroBannerImg} display={{base:"none" , md: "flex" , lg:"flex"}} objectFit="cover"  />
            <Image src={HeroBannerImg1} display={{base:"block" , md: "none" , lg:"none"}} objectFit="cover" />
          </Box>
          
          {/* <Box
            zIndex="0"
            position="absolute"
            top={{base:"45%",md:"60%"}}
            left="-50%"
            transition="background .3s, border .3s, borderRadius .3s, boxShadow .3s"
          >
            <Image src={Arrow} display={{ base: 'none', md:"none" , lg: 'block' }} />
          </Box> */}
        </Box>
      </Flex>
    </Box>
  );
}


// import React, { useEffect } from 'react';
// import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
// import HeroBannerbg from '../../Images/hero_bg.jpg';
// import girlBg from '../../Images/hero_shape.png';
// import { FaArrowRightLong } from 'react-icons/fa6'; 
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import Ripple from '../Ripple/Ripple';

// export default function HeroBanner() {
//   useEffect(() => {
//     const aosInit = () => {
//       Aos.init({ once: false });
//       Aos.refresh();
//     };
//     if (typeof window !== "undefined") {
//       window.addEventListener("load", aosInit);
//     }
//   }, []);
  

//   return (
//     <Box
//     backgroundImage={`linear-gradient(rgb(6, 84, 168, 0.6), rgb(0, 84, 168, 0.99)), url(${HeroBannerbg})`}
//       p="0% 2%"
//       bgSize="cover"
//       bgPosition="center"
//       bgRepeat="no-repeat"
//       position="relative"
//       maxW="100vw"
//       minH="100vh"
//       maxH="auto"
//       overflow="hidden"
//     >
      //  <Box
      //      position="absolute" 
      //      right="0"
      //      bottom="0"
      //      height= "430px"
      //      width= "215px"
      //      background= "blue"
      //      WebkitTransform = "skewX(-45deg)"
      //      MsTransform= "skewX(-45deg)"
      //      transform= "skewX(-45deg)"
      //      opacity= "0.5"/>

//          <Box position="absolute" top="0" right="-10" h="430px" w="215px">
//             <Image src={girlBg} />
//            </Box>
//            <Box position="absolute" top="-4" right="-6" h="430px" w="215px">
//             <Image src={girlBg} />
//            </Box>

          // {/* Place Ripple here with absolute positioning */}
          // <Box position="absolute" top="10" left="40" width="100%" height="100%" zIndex={0}>
          //   <Ripple />
          // </Box>
//       <Flex direction={{ base: "column", md: "row" }}position="relative" top="9%" 
//       data-aos="slide-right"  data-aos-delay="500"  data-aos-duration="1500">
//         <Box display="flex" flexDirection="column" 
//           pt={{base:"7%" , md:"2%" , lg:"14%"}} // Adjust padding here
//           pl={{base:"7%" , md:"10%" , lg:"20%"}} 
//           position="relative" 
//         >
//           <Box maxW="65%">
//           <Text
//             m={3}
//             fontWeight="800"
//             fontSize={{ base: "0.7em", md: "0.8em" }}
//             // color="#2b3ddb"
//             color="#fff"
//             position="relative"
//             letterSpacing="3px"
//             ml="5%"
//             _before={{
//               content: '""',
//               display: "flex",
//               width: "8%",
//               height: "1.8px",
//               // backgroundColor: "#525FE1",
//               backgroundColor:"#fff",
//               position: "absolute",
//               top: "45%",
//               left: "-5%",
//               transform: "translateX(-50%)",
//             }}
//           >
//             BUILD YOUR FUTURE WITH US
//           </Text>
//           <Text
//             fontSize={{ base: "1.2em", md: "1.6em", lg: "1.8em" }}
//             fontWeight="600"
//             mb="3%"
//             color="#fff"
//           >
//             Elevate your skills with <Text as="span" color="#ff873d">ITqHub.</Text> We transform you into a highly skilled Software Professional
//           </Text>
//           <Text
//             fontSize={{ base: "0.9em", md: "0.9em", lg: "1em" }}
//             fontWeight="380"
//             // color="#898596"
//             color="#fff"
//             mb="6%"
//           >
//             Join us to expand your knowledge, enhance your expertise, and ready to tackle any challenge.
//           </Text>
//           <Button
//             as="a"
//             href="/contactus"
//             // bg="#2b3ddb"
//             bg="transparent"
//             border="1px solid #fff"
//             color="white"
//             fontSize={{base:"0.9em" , md:"1em"}}
//             p={{base:"5%" , md:"3%"}}
//             maxW="230px" // Adjust max width as needed
//             w={{sm:"200px" , md:"230px"}}
//             rightIcon={<FaArrowRightLong />}
//           >
//             Request a call today
//           </Button>
//         </Box>
//         </Box>
        
//       </Flex>
//     </Box>
//   );
// }


