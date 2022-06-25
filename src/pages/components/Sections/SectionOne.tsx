import { Stack, Flex, Text, Heading, Box } from "@chakra-ui/react";
import ButtonCallNow from "../ButtonCTA/ButtonCallNow";

export default function SectionOne() {
  return (
    <Stack
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 10 }}
    >
      <Flex p={8} flex={1} align={"left"} justify={"left"}>
        <Stack w="full" maxW="4xl">
          <Box maxW="full" px="5rem">
            <Box bgColor="brand.green800" rounded="lg" p={4}>
              <Heading
                textAlign={"left"}
                mb={4}
                color="whiteAlpha.800"
                fontFamily="Krona One"
                fontSize="5xl"
              >
                Acabou o gás bem na hora da fome?
              </Heading>
              <Text
                textAlign={"left"}
                py={3}
                color="brand.orange400"
                fontFamily="Krona One"
                as="h2"
                size="md"
                fontSize="25"
              >
                Não fique em pânico! O seu gás está na Belém Gás.
              </Text>
            </Box>
            <ButtonCallNow />
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
