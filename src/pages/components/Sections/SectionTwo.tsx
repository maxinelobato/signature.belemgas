import { Stack, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import "@fontsource/krona-one";
import "@fontsource/open-sans";
import ButtonCallNow from "../ButtonCTA/ButtonCallNow";

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
            src={"/img/bgentregador.png"}
          />
        </Flex>
        <Flex p={16} align={"center"} justifyContent={"center"}>
          <Box rounded={6} p={8} maxW="40rem">
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Fade duration={600} left>
                <Heading
                  textAlign={"left"}
                  fontSize="2xl"
                  fontFamily={"Open Sans"}
                  color="whiteAlpha.800"
                >
                  Chame a Belém Gás no WhatsApp <br />
                  <Text as="span">
                    {" "}
                    Salve o nosso número <br />
                    <Text as="span" color="orange.400" fontFamily={"Krona One"}>
                      (91) 98145 0356
                    </Text>{" "}
                    nos seus contatos e sempre que precisar de Gás é só nos
                    chamar que irá chegar rapidinho!
                  </Text>
                </Heading>
              </Fade>
              <ButtonCallNow />
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
