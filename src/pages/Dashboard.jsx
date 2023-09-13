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
    <Container as="section" maxW="lg" py={"10px"} bgColor={"beige"} borderRadius={20}>
      <Heading m={"30px"} p={"10px"}>
        Chakra UI components
      </Heading>
      <Text ml={"30px"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ut inventore
        unde dolor molestiae hic earum quidem dolore quos maxime veritatis, iste
        reprehenderit eaque consequatur provident perspiciatis nobis alias ratione?
      </Text>
      <Text ml={"30px"} color={"blue.400"} fontWeight={"bold"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ut inventore
        unde dolor molestiae hic earum quidem dolore quos maxime veritatis, iste
        reprehenderit eaque consequatur provident perspiciatis nobis alias ratione?
      </Text>
      <Box m={"30px"} p={"20px"} bg={"orange"}>
        <Text color={"white"}>This is inside a box</Text>
      </Box>

      <Box sx={boxStyles}>Hi Ninjas!</Box>
    </Container>
  );
}
