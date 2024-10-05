
import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { MdPhone } from 'react-icons/md';


export default function WhatsappButton () {
  return (
    <Box
      position="fixed"
      bottom="11%"
      right="0"
      zIndex="6"
      marginRight="28px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="50px"
    >
      <Button
      as="a"
       href="tel:+91 73862 34657"
         display={{base:"flex" ,md:"none",lg:"none"}}
        color="#fff"
        fontSize="34px"
        padding="25px 11px"
        borderRadius="50%"
        bgGradient="linear-gradient(0deg, #1f11bf, #5343cc 100%, #fff)"
        boxShadow="8px 8px 16px #00000014"
        cursor="pointer"
        textAlign="center"
        _hover={{bgGradient:"linear-gradient(0deg, #1f11bf, #5343cc 100%, #fff)"}}
        _visited={{bgGradient:"linear-gradient(0deg, #1f11bf, #5343cc 100%, #fff)"}}>
        <MdPhone/>
      </Button>
    </Box>
  );
};

