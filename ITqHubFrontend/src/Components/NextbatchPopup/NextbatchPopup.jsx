import React, { useState} from 'react';
import Modal from 'react-modal';
import { Box, Image, Text, Link, Flex, Icon, Button } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { IoClose, IoLocationOutline } from 'react-icons/io5';
import nextBatchBg from '../../Images/new_batch.png';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    padding:"0px !important"
  },
  
  content: {
    top: '48%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
   padding:"0px !important"
  },
};

Modal.setAppElement('#root'); // Ensure this line is present to avoid accessibility issues

export default function NextBatchPopUp () {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Event Card Modal"
        
      >
        <Box  maxW="300px">
          <Flex
            direction="column"
            borderWidth="2px"
            borderRadius="md"
            boxShadow="lg"
            w="100%"
          >
            <Image
              src={nextBatchBg}
              alt="Event Image"
              objectFit="initial"
              height={{base:"200px" , md:"220px" }}
              filter="saturate(110%)"
            />
            <Button onClick={() => setModalIsOpen(false)}  
            color="#fff" bgColor="blue" size="sm"
            _hover={{bgColor:"blue"}}
            padding="0px !important"
             position="absolute" top="0" right="0"
             borderRadius="60%" 
             margin={"2"}
             >
                <IoClose/>
              </Button>
            <Box p={4} maxW="100%">
              <Text as="h6" fontSize="md" mb={3} fontWeight="bold" color="#000">
                New Batch Starts from 
              </Text>
              <Box mb={4} color="#000">
                <Flex align="center" mb={3} >
                  <Icon as={CalendarIcon} color="#fc6d14"  mr={2} />
                  <Text fontWeight="400" 
                  fontSize={{base:"0.7em" , md:"0.9em"}} >23th Aug 2024</Text>
                </Flex>
                <Flex align="center" mb={3} >
                  <Icon as={TimeIcon} color="#fc6d14"  mr={2} />
                  <Text fontWeight="400"
                  fontSize={{base:"0.7em" , md:"0.9em"}} >10:00 AM</Text>
                </Flex>
                <Flex align="center" mb={3} >
                  <Icon as={IoLocationOutline} color="#fc6d14" mr={2} />
                  <Text fontWeight="400"
                  fontSize={{base:"0.7em" , md:"0.9em"}} >ITqHub, Manjeera Trinity Corporate.</Text>
                </Flex>
              </Box>
            <Box textAlign="left" >
                <Link href="/contactus">
                  <Button bgColor="blue" color="#fff" 
                  fontSize={{base:"0.7em" , md:"0.9em"}}
                  p="3" rightIcon={<ArrowRightIcon />}>
                    Book Demo
                  </Button>
                </Link>
                {/* <Text>Limited Slots Only</Text>  */}
              </Box> 
            </Box>
          </Flex>
        </Box>
      </Modal>
    </div>
  );
}

