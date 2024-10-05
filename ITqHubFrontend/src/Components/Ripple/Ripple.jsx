import React from 'react';
import { Box } from '@chakra-ui/react';

const Ripple = ({ count = 6 }) => {
    const ripples = Array.from({ length: count }, (_, index) => (
        <Box zIndex="-1"
            key={index}
            position="absolute"
            left="0"
            bottom="0"
            height="140px"
            width="140px"
            borderRadius="50%"
            border="3px solid #fff"
            animation={`heroripple 6s linear infinite`}
            sx={{
                '@keyframes heroripple': {
                    '0%': { transform: 'scale(0)', opacity: 0.8 },
                    '50%': { transform: 'scale(1)', opacity: 0.4 },
                    '100%': { transform: 'scale(1.5)', opacity: 0 },
                },
                animationDelay: `${index * (8 / count)}s`, // Stagger the animations
            }}
        />
    ));

    return (
        <Box position="relative" height="130px" width="130px" top="15%">
            {ripples}
        </Box>
    );
};

export default Ripple;
