
import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsappButton () {

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919281433642", "_blank");
  };


  return (
    <Box
      position="fixed"
      bottom="5%"
      right="0"
      zIndex="1"
      marginRight="28px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="50px"
    >
      <Button
      display={{base:"none",md:"flex"}}
        leftIcon={<FaWhatsapp size="25" />}
        color="#fff"
        fontSize="20px"
        fontWeight="400"
        padding="15px 20px"
        borderRadius="48px"
        bgGradient="linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"
        boxShadow="8px 8px 16px #00000014"
        cursor="pointer"
        textAlign="center"
        onClick={handleWhatsAppClick}
        _hover={{bgGradient:"linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"}}
        _visited={{bgGradient:"linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"}}
      >
        Chat with us
      </Button>
      <Button
         display={{base:"flex" ,md:"none",lg:"none"}}
        color="#fff"
        fontSize="37px"
        padding="25px 10px"
        borderRadius="50%"
        bgGradient="linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"
        boxShadow="8px 8px 16px #00000014"
        cursor="pointer"
        textAlign="center"
        onClick={handleWhatsAppClick}
        _hover={{bgGradient:"linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"}}
        _visited={{bgGradient:"linear-gradient(0deg, #23b33a, #57d163 100%, #fff)"}}
      >
        <FaWhatsapp/>
      </Button>
    </Box>
  );
};

