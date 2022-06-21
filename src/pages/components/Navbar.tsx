import { Box, Container, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box p={4}>
        <Container maxW="7xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>Belém Gás</Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
