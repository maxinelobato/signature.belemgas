import { Box, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { IoIosTime } from "react-icons/io";

export default function CardsSectionFour2() {
  const Fade = require("react-reveal/Fade");
  return (
    <Fade duration={700} left>
      <Box
        maxW={"445px"}
        h={"400px"}
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
        <Box h={"200px"}>
          <Icon as={IoIosTime} w="full" h={28} color="whiteAlpha.800" />
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
            Nossos Horários
          </Heading>
          <Text
            textAlign="center"
            fontWeight="600"
            color="whiteAlpha.800"
            fontFamily={"Open Sans"}
          >
            Seg à Sex - 8h até 18h <br />
            Sábado - 9h até 17h <br />
            Domingo - 9h até 14h
          </Text>
        </Stack>
      </Box>
    </Fade>
  );
}
