import React from "react";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import CardsSectionFour1 from "../Cards/CardsSectionFour1";
import CardsSectionFour2 from "../Cards/CardsSectionFour2";
import CardsSectionFour3 from "../Cards/CardsSectionFour3";

export default function SectionFour() {
  const Fade = require("react-reveal/Fade");
  return (
    <Stack w={"full"} minH={"10vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} align={"center"} justifyContent={"center"}>
        <Box maxW="full" mx={"auto"} px="7rem" p={16}>
          <Fade duration={500} cascade right>
            <Heading
              color={"green.800"}
              textAlign={"center"}
              fontFamily={"Krona One"}
              fontWeight={600}
            >
              A maior missão da Belém Gás é facilitar nossos serviços e entregas
              para você.
            </Heading>
          </Fade>
          <SimpleGrid
            mt={16}
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            <Box>
              <CardsSectionFour1 />
            </Box>
            <Box>
              <CardsSectionFour2 />
            </Box>
            <Box>
              <CardsSectionFour3 />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Stack>
  );
}
