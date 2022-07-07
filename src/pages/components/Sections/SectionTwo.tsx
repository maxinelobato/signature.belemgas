import { Stack, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import ButtonSectionTwo from "../ButtonCTA/ButtonSectionTwo";
import "@fontsource/krona-one";

export default function SectionTwo() {
  const Fade = require("react-reveal/Fade");
  return (
    <>
      <Stack minH={"20vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            boxSize={"100%"}
            objectFit={"cover"}
            alt={"Delivery Belém Gás"}
            src={"/img/bgentregador.svg"}
          />
        </Flex>
        <Flex p={16} align={"center"} justifyContent={"center"}>
          <Box rounded={6} p={8} maxW="40rem">
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Fade duration={600} left>
                <Heading
                  textAlign={"left"}
                  fontSize="2xl"
                  fontFamily={"Krona One"}
                  color="whiteAlpha.800"
                >
                  Chame a Belém Gás no WhatsApp <br />
                  <Text as="span" color="orange.400">
                    {" "}
                    Salve o nosso número{" "}
                    <Text as="span" color="whiteAlpha.800">
                      (91) 98725-0217
                    </Text>{" "}
                    nos seus contatos e sempre que precisar de Gás é só nos
                    chamar que irá chegar rapidinho!
                  </Text>
                </Heading>
              </Fade>
              <ButtonSectionTwo />
            </Stack>
          </Box>
        </Flex>
        {/* <Flex flex={1}>
          <Image
            objectFit={"cover"}
            alt={"Delivery Belém Gás"}
            src={"/img/bgentregador.svg"}
          />
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Fade duration={600} right cascade>
              <Heading
                textAlign={"left"}
                fontSize="3xl"
                fontFamily={"Krona One"}
                color="whiteAlpha.800"
              >
                Chame a Belém Gás no WhatsApp <br />
                <Text as="span" color="orange.400">
                  {" "}
                  Salve o nosso número{" "}
                  <Text as="span" color="whiteAlpha.800">
                    (91) 98725-0217
                  </Text>{" "}
                  nos seus contatos e sempre que precisar de Gás é só nos chamar
                  que irá chegar rapidinho!
                </Text>
              </Heading>
            </Fade>
            <ButtonSectionTwo />
          </Stack>
        </Flex> */}
      </Stack>
    </>
  );
}
