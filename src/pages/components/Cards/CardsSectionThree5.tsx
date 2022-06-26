import { Box, Center, Heading, Icon, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdOutlineCreditScore } from "react-icons/md";

export default function CardsSectionThree5() {
  return (
    <Center py={12}>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        transition="0.1s linear"
        shadow="dark-lg"
        rounded={"lg"}
        bgColor={"whiteAlpha.300"}
        color={"whiteAlpha.900"}
        p={6}
        maxW={"310px"}
        w={"full"}
        boxShadow={"2xl"}
      >
        <Box
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={MdOutlineCreditScore} w={280} h={200} color="white" />
        </Box>
        <Stack bgSize="lg" p={4} align={"center"}>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            Cartão de Débito
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
