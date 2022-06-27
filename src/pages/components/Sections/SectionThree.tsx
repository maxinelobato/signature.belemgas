import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import CardsSectionThree1 from "../Cards/CardsSectionThree1";
import CardsSectionThree2 from "../Cards/CardsSectionThree2";
import CardsSectionThree3 from "../Cards/CardsSectionThree3";

export default function SectionThree() {
  return (
    <Stack w={"full"} minH={"50vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} align={"center"} justifyContent={"center"}>
        <Box maxW="full" mx={"auto"} px="7rem" p={16}>
          <Heading
            color={"green.800"}
            textAlign={"center"}
            fontFamily={"Krona One"}
            fontSize="3xl"
          >
            A maior missão da Belém Gás é facilitar nossos serviços e entregas
            para você.
          </Heading>
          <SimpleGrid
            py={16}
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
          >
            <Box>
              <CardsSectionThree1 />
            </Box>
            <Box>
              <CardsSectionThree2 />
            </Box>
            <Box>
              <CardsSectionThree3 />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Stack>
  );
}
