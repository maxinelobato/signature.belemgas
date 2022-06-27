import { Box, Flex, HStack, Text, Stack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import "@fontsource/krona-one";
import { BsCreditCard } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex>
      <Box
        maxW={"60rem"}
        w={"full"}
        alignSelf={{ base: "center", lg: "flex-start" }}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default function CardsSectionTwo() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
    >
      <PriceWrapper>
        <Box py={4} px={12}>
          <HStack justifyContent={"center"}>
            <Icon as={BsCreditCard} w={10} h={10} color="whiteAlpha.800" />
          </HStack>
          <HStack justifyContent="center">
            <Text
              fontSize="lg"
              fontFamily={"Krona One"}
              color={"whiteAlpha.800"}
            >
              No Crédito <Text as="span"> 2x SEM JUROS </Text>
            </Text>
          </HStack>
        </Box>
      </PriceWrapper>
      <PriceWrapper>
        <Box py={4} px={12}>
          <HStack justifyContent={"center"}>
            <Icon as={BsCreditCard} w={10} h={10} color="whiteAlpha.800" />
          </HStack>
          <HStack justifyContent="center">
            <Text
              fontSize="lg"
              fontFamily={"Krona One"}
              color={"whiteAlpha.800"}
            >
              No Débito <Text as="span"> 1x SEM JUROS </Text>
            </Text>
          </HStack>
        </Box>
      </PriceWrapper>
      <PriceWrapper>
        <Box py={4} px={12}>
          <HStack justifyContent={"center"}>
            <Icon as={FaMoneyBill} w={10} h={10} color="whiteAlpha.800" />
          </HStack>
          <HStack justifyContent="center">
            <Text
              fontSize="lg"
              fontFamily={"Krona One"}
              color={"whiteAlpha.800"}
            >
              No Pix <Text as="span"> à Vista </Text>
            </Text>
          </HStack>
        </Box>
      </PriceWrapper>
    </Stack>
  );
}
