import { Stack, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import "@fontsource/krona-one";
import ButtonSectionTwo from "../ButtonCTA/ButtonSectionTwo";

export default function SectionTwo() {
  return (
    <>
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            style={{
              borderRadius: "0 20% 50% 0",
            }}
            alt={"Delivery Belém Gás"}
            objectFit={"cover"}
            src={"/img/bgfamiliareunida.svg"}
          />
        </Flex>
        <Flex p={16} flex={1} align={"center"} justify={"center"}>
          <Box rounded="lg" p={10}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontFamily={"Krona One"}
                textAlign={"right"}
                mb={2}
                color="whiteAlpha.800"
                fontSize="4xl"
              >
                Uma empresa familiar, com o único objetivo de entregar{" "}
                <Text
                  as="span"
                  color="orange.400"
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "95%",
                    position: "absolute",
                    bottom: 1,
                    rounded: 4,
                    left: 2,
                    bg: "blackAlpha.900",
                    zIndex: -1,
                  }}
                >
                  {" "}
                  as famílias de Belém do Pará o melhor em serviço e atendimento
                  rápido.
                </Text>
              </Heading>
              <ButtonSectionTwo />
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
