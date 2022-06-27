import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "@fontsource/krona-one";

export default function FooterBelemGas() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"full"}
        py={6}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          fontFamily={"Krona One"}
          fontWeight={"50"}
          color={"whiteAlpha.700"}
        >
          © 2022 Belém Gás. Todos os Direitos Reservados
        </Text>
      </Container>
    </Box>
  );
}
