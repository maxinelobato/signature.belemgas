import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  Center,
  Box,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function PageFirst() {
  return (
    <Stack
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 10 }}
    >
      <Flex p={16} flex={1} align={"left"} justify={"left"}>
        <Stack w="full" maxW="container.lg">
          <Box maxW="full">
            <Heading
              textAlign={"left"}
              mb={4}
              color="blackAlpha.800"
              fontFamily="Krona One"
              fontSize="5xl"
            >
              Você vive esquecendo de abastecer o gás? Quem já não passou por
              isso?
            </Heading>
            <Text
              color={"blackAlpha.700"}
              textAlign={"left"}
              py={3}
              fontFamily="Krona One"
              as="h2"
              size="md"
              fontSize="25"
            >
              Sabendo disso, nós levamos até a sua casa!
            </Text>
            <Stack
              py={10}
              alignContent="center"
              alignItems="center"
              justify="left"
              direction={{ base: "column", md: "row" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://wa.me/message/N7ODJHBPZALLJ1"
                isExternal
              >
                <Button
                  as={motion.div}
                  size="lg"
                  height="60px"
                  width="300px"
                  rounded="lg"
                  bgColor="blackAlpha.900"
                  boxShadow="dark-lg"
                  _hover={{
                    bg: "orange.500",
                    textColor: "beige",
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition="0.1s linear"
                >
                  <Center>
                    <Text textTransform={"uppercase"}>peça seu gás agora</Text>
                  </Center>
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
