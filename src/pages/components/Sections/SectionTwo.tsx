import { Stack, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import "@fontsource/krona-one";
import ButtonSectionTwo from "../ButtonCTA/ButtonSectionTwo";

export default function SectionTwo() {
  return (
    <>
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            w={900}
            h={600}
            alt={"Delivery Belém Gás"}
            src={"/img/bgentregador.svg"}
          />
        </Flex>
        <Flex p={24} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontFamily={"Krona One"}
              textAlign={"right"}
              fontSize="3xl"
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
        </Flex>
      </Stack>
    </>
  );
}
