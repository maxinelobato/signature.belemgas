import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
} from "@chakra-ui/react";
import CardsSectionFour1 from "../Cards/CardsSectionFour1";
import CardsSectionFour2 from "../Cards/CardsSectionFour2";
import CardsSectionFour3 from "../Cards/CardsSectionFour3";
import { FaHandsHelping } from "react-icons/fa";

export default function SectionFour() {
  const Fade = require("react-reveal/Fade");
  return (
    <Stack
      minH={"20vh"}
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 10 }}
    >
      <Box p={16} maxW="85rem" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
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
          mt={20}
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 20 }}
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
    </Stack>
  );
}
