import { Container, Stack, Text } from "@chakra-ui/react";
import "@fontsource/krona-one";

export default function FooterBelemGas() {
  return (
    <Container
      as={Stack}
      maxW={"full"}
      w={"full"}
      py={6}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "center" }}
      align={{ base: "center", md: "center" }}
    >
      <Text color={"brand.green400"} fontFamily={"Open Sans"}>
        © 2022 Belém Gás. Todos os Direitos Reservados
      </Text>
    </Container>
  );
}
