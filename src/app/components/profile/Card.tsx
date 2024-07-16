//https://templateskart.com/components/cards

import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center } from '@chakra-ui/react';

const Card = (props) => {
  const bg = useColorModeValue('white', '#2f3244');
    if (props.therapist){


  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box
          maxH="400px"
          minH="354px"
          w="345px"
          boxShadow="lg"
          rounded="md"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: 'lg' }}
          bg={bg}
          role="group"
        >
           !!!! {props.therapist.name} !!!!
        
        </Box>
      </Center>
    </Container>
  );
} else { 
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
    <Center>
      <Box
        maxH="400px"
        minH="354px"
        w="345px"
        boxShadow="lg"
        rounded="md"
        p={6}
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: 'lg' }}
        bg={bg}
        role="group"
      >
         !!!! LOADING !!!!
      
      </Box>
    </Center>
  </Container>

}
};

export default Card;