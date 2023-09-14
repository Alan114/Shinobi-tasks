import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bgColor: "powderblue",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(0.9px)",
    ":hover": {
      color: "orange",
      bg: "indigo",
    },
  };

  return (
    <Container as="section" maxW="4x1" py={"20px"}>
      <Heading m={"30px"} p={"10px"}>
        Chakra UI components
      </Heading>
      <Text ml={"30px"} fontWeight={"bold"}>
        Chakra UI is a simple, modular and accessible component library that gives you
        the building blocks you need to build your React applications.
      </Text>
      <Text ml={"30px"} color={"blue.400"} fontWeight={"bold"}>
        Chakra UI is established on principles that keep its components fairly
        consistent. Understanding these concepts will help you better contribute to
        Chakra UI. Our goal is to design simple, composable components that cater to
        real-life UI design problems. In order to do that, we developed a set of
        principles that help us always be on that path.
      </Text>
      <Box m="30px" p="20px" bg="orange">
        <Text color={"white"}>This is inside a box</Text>
      </Box>

      <Box sx={boxStyles}>Hi Ninjas!</Box>
    </Container>
  );
}
