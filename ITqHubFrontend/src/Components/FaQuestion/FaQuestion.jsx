import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Flex, 
  Image, 
  Container, 
  Heading, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon
} from '@chakra-ui/react';
import galleryImg1 from '../../Images/gallery_1.jpg';
import galleryImg2 from '../../Images/gallery_2.jpg';
import galleryImg3 from '../../Images/gallery_3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
  useEffect(() => {
    const aosInit = () => {
      Aos.init({ once: false });
      Aos.refresh();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("load", aosInit);
    }
  }, []);
  

  const faqs = [
    { question: "What is Full Stack Java Developer Course?", answer: "The Full Stack Java Developer Course is a 6 month intensive program that helps the learners to Learn the frontend and backend to create an effective web application. Master the various programming languages. Get hands-on experience on 20+ projects. Learn about the current industry trends." },
    { question: "Why should I learn Full Stack Java Developer Course from ITqHub?", answer: "Today, web developers are in very high demand. ITqHub provides training according to the current industry trends. Apart from training, we assist the students in cracking interviews and internship programs that help them move forward in their careers." },
    { question: "How qualified are the trainers who teach at ITqHub?", answer: "The trainers at ITqHub are the industrial experts who have at least 6 to 10+ years of experience in the relevant industry. The trainers are well versed in providing extensive training to the students and make them ready for job interviews in the IT industry." },
    { question: "What is the duration of the Full Stack Java Developer Course?", answer: "ITqHub provides the Java Full Stack Developer Course training for a duration of 6 months. The duration helps the students to master various programing languages and other required skills to get job in the IT industry." },
    { question: "Do I get job assistance from ITqHub Academy after the completion of the Java Full Stack Developer course program?", answer: "Yes! ITqHub provides placement assistance and interview training on successful completion of the Java Full Stack Developer course program." },
    { question: "What will be the expected salary for a fresher in a frontend and backend web development position?", answer: "The initial salary for a fresher in web development industry ranges from 4 to 8 LPA, depending on the knowledge and programing skills of the candidate." },
    { question: "What are the qualifications or skills required to learn Full Stack Java Development Course?", answer: "Students or learners should have basic coding skills to start learning the Full Stack Java Development course. If you are from a non-IT background, having the skill of continuous learning and developing one’s knowledge can help you learn full-stack Java development quickly." },
    { question: "What are the types of job positions I can apply for after completing this course?", answer: "One can apply for job positions such as web developer, full stack architect, mobile app developer, software engineer, Java developer, and many other related positions." },
    { question: "What are the available certifications for this course?", answer: "Like other courses, we provide Full Stack Java certification recognised by ISO, NASSCOM, Skill India, Skill AP, National Skill Development Corporation, and DDU-GKY." },
    { question: "Can I get a demo for the Full Stack Java Developer Program?", answer: "Yes! You can contact our support team or click on the book demo option to confirm the demo session of the Full Stack Java Developer Program." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box p="2%" borderBottom="0.5px solid #9196a6" color="#000">
      <Flex direction={{ base: "column", md: "row" }} wrap="wrap" gap={4} alignItems="center">
        <Flex direction="column" flex="1" maxW={{ base: "100%", md: "50%" }} p={4} justifyContent="center">
          <Flex direction="column">
            <Flex align="center" justify="center" mb={4} wrap="wrap">
              <Image
                src={galleryImg1}
                display={{ base: "none", md: "block" }}
                alt="Gallery Image 1"
                m="0.5% 5%"
                boxSize="300px"
                borderRadius="5%"
                objectFit="cover"
              />
              <Image
                src={galleryImg2}
                display={{ base: "none", md: "block" }}
                alt="Gallery Image 2"
                borderRadius="5%"
                boxSize="300px"
                objectFit="initial"
              />
            </Flex>
            <Flex justifyContent="center">
              <Image
                src={galleryImg3}
                alt="Gallery Image 3"
                borderRadius="5%"
                w="450px"
                objectFit="cover"
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" flex="1" maxW={{ base: "100%", md: "50%" }} p={4}>
          <Box py={10}>
            <Container maxW="container.md">
              <Heading as="h2" mb={8} textAlign="center" color="#000">
                FAQ
              </Heading>
              <Accordion allowToggle>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} isopen={openIndex === index}>
                    <h2>
                      <AccordionButton onClick={() => handleToggle(index)}
                       data-aos="fade-up"
                       data-aos-delay="900"
                       data-aos-duration="900">
                        <Box flex="1" textAlign="left" fontSize={{base:"0.9em" , md:"1em" , lg:"1em"}} 
                        fontWeight="500" color={openIndex === index ? "blue" : "black"}>
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={{base:"0.9em" , md:"1em" , lg:"1em"}}>
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FAQSection;
