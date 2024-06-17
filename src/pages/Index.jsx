import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaCat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Cat World
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/cat.jpg" alt="Cute Cat" borderRadius="lg" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the amazing world of cats. Learn about different breeds, their behaviors, and how to take care of them.
        </Text>
        <Button rightIcon={<FaCat />} colorScheme="teal" variant="solid" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;