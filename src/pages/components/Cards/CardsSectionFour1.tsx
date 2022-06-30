import { Box, Center, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";

export default function CardsSectionFour1() {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        p={6}
        overflow={"hidden"}
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
            Seja nosso cliente
          </Heading>
          <Text
            textAlign="center"
            fontWeight="600"
            color="green.300"
            fontFamily={"Open Sans"}
          >
            Excelente atendimento <br />
            Entrega rápida <br />
            Várias linhas de comunicação
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
