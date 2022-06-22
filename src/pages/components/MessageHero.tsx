import {
  Flex,
  Container,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import ButtonCTA from "./ButtonCTA";
import Navbar from "./Navbar";

export default function MessageHero() {
  return (
    <Container maxW={"6xl"}>
      <Navbar />
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Box bgGradient="linear(to-r, transparent, green.500)" rounded="md">
          <Text
            color={"white"}
            fontWeight={700}
            fontSize={"5xl"}
            lineHeight={1.2}
            textTransform={"uppercase"}
          >
            Esqueceu de abastecer o gás? Não tem problema!
          </Text>
          {"..."}
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={"4xl"}
          >
            Basta fazer uma ligação ou falar com a nossa equipe pelo whatsapp e
            eles levarão até o conforto da sua casa!
          </Text>
        </Box>
        <Stack spacing={2} direction={"row"}>
          <Button
            size="lg"
            height="70px"
            width="300px"
            px={10}
            fontSize={"lg"}
            textTransform={"uppercase"}
            rounded={"full"}
            bgColor="green.900"
            boxShadow={
              "0px 1px 25px -5px rgb(154 230 180 / 88%), 0 10px 10px -5px rgb(154 230 180 / 83%)"
            }
            _hover={{
              bg: "green.500",
              color: "green.100",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            tenha o seu gás agora!
          </Button>
        </Stack>
        <Flex direction={"row"}>
          <Image
            alt="..."
            src="/img/delivery.png"
            height={{ sm: "14rem", lg: "24rem" }}
            mt={-16}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
