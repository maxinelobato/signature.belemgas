import {
  Box,
  Flex,
  Stack,
  useColorMode,
  Container,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <Box px="4rem">
        <Flex h="8rem" alignItems={"center"} justifyContent={"space-between"}>
          <Image
            src="/img/belemgaslogo.svg"
            alt="Belém Gás"
            width={300}
            height={300}
          />
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} ml={4}>
              <ButtonWhatsapp />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
