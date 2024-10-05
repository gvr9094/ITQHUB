// theme.js
import { extendTheme } from '@chakra-ui/react'

// Update the breakpoints as key-value pairs
const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// Extend the theme
const theme = extendTheme({ breakpoints ,styles: {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      fontFamily: "'Jost', sans-serif",
    },
  }),
},
colors: {
  primary: {
    light: '#ff6347', // Light mode color
    dark: '#ff4500',  // Dark mode color
  },
}, })



export default theme
