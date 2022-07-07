import {
  Button,
  ButtonProps,
  Center,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ButtonCallNow(props: ButtonProps) {
  return (
    <Stack
      spacing={4}
      py={5}
      justify="left"
      direction={{ base: "column", md: "row" }}
    >
      <Link
        style={{ textDecoration: "none" }}
        href="https://api.whatsapp.com/send?phone=5591981450356&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20g%C3%A1s%2C%20te%20achei%20pelo%20google"
        isExternal
      >
        <Button
          {...props}
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
            <Text textTransform={"uppercase"}>peça seu gás!</Text>
          </Center>
        </Button>
      </Link>
    </Stack>
  );
}
