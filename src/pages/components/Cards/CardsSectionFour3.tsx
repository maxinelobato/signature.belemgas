import { Box, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { RiCustomerServiceFill } from "react-icons/ri";

export default function CardsSectionFour1() {
  const Fade = require("react-reveal/Fade");
  return (
    <Fade duration={800} cascade right>
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
          <Icon
            as={RiCustomerServiceFill}
            w="full"
            h={28}
            color="whiteAlpha.800"
          />
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
            Nossos Números
          </Heading>
          <Text
            textAlign="center"
            fontWeight="600"
            color="whiteAlpha.800"
            fontFamily={"Open Sans"}
          >
            Telefone: (91) 3257-0320 / 3257-0320 <br />
            Celular: (91) 98725-0217 <br />
            WhatsApp: (91) 98145-0356
          </Text>
        </Stack>
      </Box>
    </Fade>
  );
}
