import { Box, Flex, Stack, Image } from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import ButtonWhatsapp from "./ButtonCTA/ButtonWhatsapp";

export default function Nav() {
  return (
    <>
      <Box px="7rem">
        <Flex h="10rem" alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Image
                src="/img/logo2.svg"
                alt="Belém Gás"
                width={350}
                height={350}
              />
            </Stack>
          </Flex>
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
