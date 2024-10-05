import { border, Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import nsc from '../../Images/nsc.png'
import si from '../../Images/si.png'
import sa from '../../Images/sa.png'
import nasscom from '../../Images/nasscom.png'
import ic from '../../Images/ic.png'
import dg from '../../Images/dg.png'


export default function Recognizationfrom() {
  
  const partners = [
    { src: nsc, alt: "NSC" },
    { src: si, alt: "SI" },
    { src: nasscom, alt: "NASSCOM" },
    { src: ic , alt: "IC" },
    { src:  sa, alt: "SA" },
    { src: dg, alt: "DG" },
  ];


  return (
    <Box textAlign="center" mb={"3%"}>
      <Heading
        as="h2"
        size="xl"
        mt="2%"
        color="#000"
        fontWeight="500"
           letterSpacing="1px"
        position="relative"
        _after={{
          content: '""',
          display: "block",
          width: "10%",
          height: "4px",
          backgroundColor: "#ffa41b",
          position: "absolute",
          bottom: "-12px",
          left: 0,
          right: 0,
          margin: "auto",
          borderRadius: "50%",
        }}
      >
        Recognized by
      </Heading>
      <Flex wrap="wrap" justify="center" align="center">
        {partners.map((partner, index) => (
          <Box key={index} p={2} maxW="220px"  mt="3%">
              <Image src={partner.src} alt={partner.alt}  />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

