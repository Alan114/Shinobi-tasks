import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" size="4xl">
        Shinobi missions
      </Heading>
      <Spacer></Spacer>

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          Kakuzu
        </Box>
        <Text>kakuzu@hiddenvillage.dev</Text>
        <Button colorScheme="blue">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="green" flexGrow="1">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow" flexGrow="2">
    //     4
    //   </Box>
    // </Flex>
  );
}
