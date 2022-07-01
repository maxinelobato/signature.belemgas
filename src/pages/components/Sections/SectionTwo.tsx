import { Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import ButtonSectionTwo from "../ButtonCTA/ButtonSectionTwo";
import "@fontsource/krona-one";

export default function SectionTwo() {
  const Fade = require("react-reveal/Fade");
  return (
    <>
      <Stack minH={"20vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            objectFit={"cover"}
            alt={"Delivery Belém Gás"}
            src={"/img/bgentregador.svg"}
          />
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Fade duration={600} right cascade>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
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
              <ButtonSectionTwo />
            </Stack>
          </Fade>
        </Flex>
      </Stack>
    </>
  );
}
