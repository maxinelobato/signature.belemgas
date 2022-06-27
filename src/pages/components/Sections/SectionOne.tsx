import { Stack, Flex, Text, Heading, Box } from "@chakra-ui/react";
import ButtonCallNow from "../ButtonCTA/ButtonCallNow";
import "@fontsource/krona-one";

export default function SectionOne() {
  return (
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={16} align={"center"} justifyContent={"center"}>
        <Box rounded="lg" p={8}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Box
              bgGradient="linear(to-r, transparent, brand.green800)"
              rounded={6}
              py={18}
            >
              <Heading
                fontFamily={"Krona One"}
                textAlign={"left"}
                color="whiteAlpha.800"
                fontSize="5xl"
                textTransform={"uppercase"}
              >
                acabou o gás bem na hora da fome? <br />
                <Text as="span" color="orange.200" fontSize={"2xl"}>
                  {" "}
                  não fique em pânico! O seu gás está na Belém Gás.
                </Text>
              </Heading>
              <ButtonCallNow />
            </Box>
          </Stack>
        </Box>
      </Flex>
      <Flex flex={1}></Flex>
    </Stack>
  );
}
