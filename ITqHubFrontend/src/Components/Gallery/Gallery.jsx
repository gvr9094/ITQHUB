import React,{useEffect} from "react";
import { Box, Grid, Image, Heading } from "@chakra-ui/react";
import seatingview1 from '../../Images/seating_view_1.png'
import seatingview2 from '../../Images/seating_view_2.png'
import seatingview3 from '../../Images/seating_view_3.png'
// import galleryIn1 from '../../Images/gallery_in-1.jpg'
// import galleryIn2 from '../../Images/gallery_in-2.jpg'
// import galleryIn3 from '../../Images/gallery_in-3.jpg'
// import galleryIn4 from '../../Images/gallery_in-4.jpg'
import galleryIn5 from '../../Images/gallery_in-5.jpg'
import galleryIn6 from '../../Images/gallery_in-6.jpg'
import galleryIn7 from '../../Images/gallery_in-7.jpg'
import galleryIn8 from '../../Images/gallery_in-8.jpg'
import galleryIn9 from '../../Images/gallery_in-9.jpg'
import galleryIn10 from '../../Images/gallery_in-10.jpg'
import galleryIn11 from '../../Images/gallery_in-11.jpg'
import galleryIn12 from '../../Images/gallery_in-12.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Gallery () {

  useEffect(() => {
    const aosInit = () => {
      Aos.init({ once: false });
      Aos.refresh();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("load", aosInit);
    }
  }, []);
  

  const images = [seatingview3 , seatingview1 , seatingview2, seatingview3, 
    galleryIn5, galleryIn6, galleryIn8 , galleryIn9,
                  galleryIn10, galleryIn11, galleryIn12,galleryIn7  ];
                   useEffect(() => {
    Aos.init({once: false}); // Initialize AOS
    Aos.refresh(); // Refresh AOS on component mount or after modal opens
  }, []);

  return (
    <Box as="section" w={{base:"90%" , md:'85%' }} 
         mx="auto" mt="5%" mb="4%">
      <Heading
        as="h2"
        size="xl"
        mb="6%"
        color="black"
        position="relative"
        letterSpacing="1px"
        fontWeight="500"
        textAlign="center"
        _after={{
          content: '""',
          display: "block",
          width: "10%",
          height: "4px",
          backgroundColor: "#ffa41b",
          position: "absolute",
          bottom: "-10px",
          left: 0,
          right: 0,
          margin: "auto",
          borderRadius: "50%",
        }}>
            Our Gallery
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 2fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={4}
        className="gallery-container"
      >
        {images.map((src, index) => (
          <Box key={index} overflow="hidden">
            <Image src={src} alt={`Image ${index + 1}`} filter="saturate(105%)"
            objectFit="fill" p="2%" w="100%" height="90%" borderRadius="20px" 
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="1500"/>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};


