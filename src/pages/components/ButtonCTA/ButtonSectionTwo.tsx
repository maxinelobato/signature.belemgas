import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ButtonSectionTwo() {
  return (
    <Stack
      spacing={4}
      py={5}
      justify="right"
      direction={{ base: "column", md: "row" }}
    >
      <Button
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        transition="0.1s linear"
        size="lg"
        height="60px"
        width="300px"
        rounded="lg"
        bgColor="whiteAlpha.900"
        color="blackAlpha.800"
        boxShadow="lg"
        _hover={{
          bg: "brand.orange400",
          textColor: "beige",
        }}
      >
        <Center>
          <Text textTransform={"uppercase"}>fale conosco </Text>
        </Center>
      </Button>
    </Stack>
  );
}
