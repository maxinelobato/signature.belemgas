import { Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ButtonSectionTwo() {
  return (
    <Stack
      spacing={4}
      py={5}
      justify="right"
      direction={{ base: "column", md: "row" }}
    >
      <Link style={{ textDecoration: "none" }} href="" isExternal>
        <Button
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          variant="solid"
          transition="0.1s linear"
          size="lg"
          height="60px"
          width="300px"
          rounded="lg"
          bgColor="whiteAlpha.900"
          color="blackAlpha.800"
          boxShadow="lg"
          _hover={{
            color: "whiteAlpha.900",
            bg: "whiteAlpha.500",
            border: "2px solid",
            borderColor: "whiteAlpha.900",
          }}
        >
          <Center>
            <Text textTransform={"uppercase"}>fale conosco </Text>
          </Center>
        </Button>
      </Link>
    </Stack>
  );
}
