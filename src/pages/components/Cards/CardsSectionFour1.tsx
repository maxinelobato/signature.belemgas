import {
  Box,
  Flex,
  HStack,
  List,
  Text,
  ListItem,
  Stack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaHandsHelping } from "react-icons/fa";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
      boxShadow="lg"
      rounded={"xl"}
      bg="green.800"
      border="1px solid"
      borderColor="whiteAlpha.400"
      _hover={{
        bg: "brand.green400",
        border: "1px solid",
        borderColor: "brand.green400",
      }}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
    >
      <Box
        maxW={"40rem"}
        w={"full"}
        alignSelf={{ base: "center", lg: "flex-start" }}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default function CardsSectionFour1() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
    >
      <PriceWrapper>
        <Box py={4} px={12} overflow="hidden">
          <HStack justifyContent={"center"}>
            <Icon as={FaHandsHelping} w={20} h={20} color="whiteAlpha.800" />
          </HStack>
          <HStack justifyContent="center">
            <Text
              fontSize="2xl"
              fontWeight="500"
              fontFamily={"Krona One"}
              textTransform={"uppercase"}
              color={"whiteAlpha.800"}
            >
              Seja nosso cliente
            </Text>
          </HStack>
        </Box>
        <VStack py={8} mt={-4}>
          <List
            spacing={3}
            textAlign="start"
            px={6}
            fontWeight="600"
            color="green.300"
            fontFamily={"Open Sans"}
          >
            <ListItem textAlign={"center"} color={"whiteAlpha.800"}>
              Excelente atendimento
            </ListItem>
            <ListItem textAlign={"center"} color={"whiteAlpha.800"}>
              Entrega rápida
            </ListItem>
            <ListItem textAlign={"center"} color={"whiteAlpha.800"}>
              Várias linhas de comunicação
            </ListItem>
          </List>
        </VStack>
      </PriceWrapper>
    </Stack>
  );
}
