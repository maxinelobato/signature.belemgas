import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardsSectionThree1 from "../Cards/CardsSectionThree1";
import CardsSectionThree2 from "../Cards/CardsSectionThree2";
import CardsSectionThree3 from "../Cards/CardsSectionThree3";
import CardsSectionThree4 from "../Cards/CardsSectionThree4";
import CardsSectionThree5 from "../Cards/CardsSectionThree5";
import CardsSectionThree6 from "../Cards/CardsSectionThree6";

export default function SectionThree() {
  return (
    <Box maxW="8xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }} p={16}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontFamily={"Krona One"}
      >
        A maior missão da Belém Gás é facilitar nossos serviços, entregas e
        pagamentos para você.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Box>
          <CardsSectionThree1 />
        </Box>
        <Box>
          <CardsSectionThree2 />
        </Box>
        <Box>
          <CardsSectionThree3 />
        </Box>
        <Box>
          <CardsSectionThree4 />
        </Box>
        <Box>
          <CardsSectionThree5 />
        </Box>
        <Box>
          <CardsSectionThree6 />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
