import { Stack, Flex, Text, Heading, Box, Image } from "@chakra-ui/react";
import ButtonCallNow from "../ButtonCTA/ButtonCallNow";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

export default function SectionOne() {
  const Fade = require("react-reveal/Fade");
  return (
    <Stack minH={"20vh"} py={16} direction={{ base: "column", md: "row" }}>
      <Flex p={16} align={"center"} justifyContent={"center"}>
        <Box
          rounded={6}
          p={8}
          maxW="40rem"
          bgGradient="linear(to-r, transparent, brand.green800)"
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Fade duration={600} right>
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
                lineHeight={"120%"}
                textAlign={"left"}
                color="whiteAlpha.800"
                fontFamily={"Krona One"}
                textTransform={"uppercase"}
              >
                acabou o gás bem na hora da fome?
              </Heading>
              <Text
                as="span"
                mb={50}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
                lineHeight={"120%"}
                color="orange.200"
                fontFamily={"Open Sans"}
                textTransform={"uppercase"}
              >
                não fique em pânico! O seu gás está na Belém Gás.
              </Text>
            </Fade>
            <ButtonCallNow />
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
}
