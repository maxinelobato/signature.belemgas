import { Box, Center, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";

export default function CardsSectionFour1() {
  const Fade = require("react-reveal/Fade");
  return (
    <Fade duration={700} cascade right>
      <Box
        maxW={"445px"}
        w={"full"}
        p={6}
        overflow={"hidden"}
        transition="0.1s linear"
        boxShadow="lg"
        rounded={"xl"}
        bg="green.800"
        border="1px solid"
        borderColor="whiteAlpha.400"
      >
        <Box h={"210px"} mt={6} mx={-6} mb={-14} pos={"relative"}>
          <Icon as={FaHandsHelping} w="full" h={28} color="whiteAlpha.800" />
        </Box>
        <Stack>
          <Heading
            textAlign={"center"}
            fontSize="2xl"
            fontWeight="500"
            fontFamily={"Krona One"}
            textTransform={"uppercase"}
            color={"whiteAlpha.800"}
          >
            Você recebe
          </Heading>
          <Text
            textAlign="center"
            fontWeight="600"
            color="whiteAlpha.800"
            fontFamily={"Open Sans"}
          >
            Excelente atendimento <br />
            Entrega rápida <br />
            Várias linhas de comunicação
          </Text>
        </Stack>
      </Box>
    </Fade>
  );
}
