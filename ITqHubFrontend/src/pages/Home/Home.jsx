import React from 'react'
import {Box} from "@chakra-ui/react"
import Appbar from '../../Components/AppBar/AppBar.jsx'
import HeroBanner from '../../Components/HeroBanner/HeroBanner.jsx'
import CourseCategories from '../../Components/CourseCategories/CourseCategories.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import FeaturedIn from '../../Components/FeaturedIn/FeaturedIn.jsx'
import WhyWeAre from '../../Components/WhyWeAre/WhyWeAre.jsx'
import Welcome from '../../Components/Welcome/Welcome.jsx'
import RecognizedBy from '../../Components/RecognisationFrom/RecognisationFrom.jsx'
import HiringCompaniesSection from '../../Components/HiringSection/HiringSection.jsx'
import WhatIsUpToNow from '../../Components/WhatWeDid/WhatIsUpToNow.jsx'
import NextBatchTimer from '../../Components/NextBatchTimer/NextBatchTimer.jsx'
import WhatsappButton from '../../Components/WhatsappButton/WhatsappButton.jsx'
import CallButton from '../../Components/CallButton/CallButton.jsx'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import StudentProfile from '../../Components/StudentPlacementRecords/StudentPlacementRecords.jsx'
import NextbatchPopup from '../../Components/NextbatchPopup/NextbatchPopup.jsx'

function Home() {
  return (
    <Box>
   <Appbar/>
   <HeroBanner/>
   <WhatsappButton/>
   <Welcome/>
   <CallButton/> 
   <RecognizedBy/>
   <CourseCategories/>
   <StudentProfile/>
   <HiringCompaniesSection/>
   <NextBatchTimer/>
   <WhyWeAre/>
   <WhatIsUpToNow/>
   <Gallery/>
   <FeaturedIn/>
   <NextbatchPopup/>
   <Footer/>
    </Box>
  )
}

export default Home
