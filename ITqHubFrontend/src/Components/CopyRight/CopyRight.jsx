import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FooterBottom = () => {
  return (
    <Box as="footer" textAlign="center" bg="#272D38" p="2% 0%" borderTop="0.2px solid #fff">
      <Text fontSize="1em">
        Copyright &copy; <Text as="span" color='#051dfc' fontWeight="bold">IT Q HUB</Text>, All Rights Reserved.
      </Text>
      <Text fontSize="1em">
        Designed By <Text as="span" color="#051dfc" fontWeight="bold">
            @Venkat Gudipati.
          </Text>
      </Text>
    </Box>
  );
};

export default FooterBottom;
