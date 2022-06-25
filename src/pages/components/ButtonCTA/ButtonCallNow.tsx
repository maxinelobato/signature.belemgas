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
      py={10}
      alignContent="center"
      alignItems="center"
      justify="left"
      direction={{ base: "column", md: "row" }}
    >
      <Link
        style={{ textDecoration: "none" }}
        href="https://wa.me/message/N7ODJHBPZALLJ1"
        isExternal
      >
        <Button
          {...props}
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          transition="0.1s linear"
          size="lg"
          height="60px"
          width="300px"
          rounded="lg"
          bgColor="whiteAlpha.900"
          color="blackAlpha.800"
          boxShadow="dark-lg"
          _hover={{
            bg: "brand.orange400",
            textColor: "beige",
          }}
        >
          <Center>
            <Text textTransform={"uppercase"}>peça seu gás agora</Text>
          </Center>
        </Button>
      </Link>
    </Stack>
  );
}
