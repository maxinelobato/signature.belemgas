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
      <Container maxW={"8xl"}>
        <Box px={4}>
          <Flex h="8rem" alignItems={"center"} justifyContent={"space-between"}>
            <Image
              src="/img/belemgaslogo.svg"
              alt="Belém Gás"
              width={400}
              height={400}
            />
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <ButtonWhatsapp />
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
