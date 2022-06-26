import { Stack, Flex, Text, Heading, Box } from "@chakra-ui/react";
import ButtonCallNow from "../ButtonCTA/ButtonCallNow";
import "@fontsource/krona-one";

export default function SectionOne() {
  return (
    <Stack minH={"110vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justifyContent={"center"}>
        <Box
          bgGradient="linear(to-r, transparent, brand.green800)"
          rounded="lg"
          py={5}
          px={10}
        >
          <Stack spacing={0} w={"full"} maxW={"lg"}>
            <Heading
              textAlign={"left"}
              color="whiteAlpha.800"
              fontFamily="Krona One"
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              lineHeight={"110%"}
            >
              Acabou o gás bem na hora da fome? <br />
              <Text
                fontFamily={"Krona One"}
                as={"span"}
                textTransform={"uppercase"}
                lineHeight={"90%"}
                fontSize={"2xl"}
                color={"orange.200"}
              >
                Não fique em pânico! O seu gás está na Belém Gás.
              </Text>
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <ButtonCallNow />
            </Stack>
          </Stack>
        </Box>
      </Flex>
      <Flex flex={1}></Flex>
    </Stack>
  );
}
