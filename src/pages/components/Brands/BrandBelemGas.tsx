import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";

export default function BrandBelemGas() {
  return (
    <>
      <Stack mt="-8rem">
        <Flex h="12rem" alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <Text
                color={"orange.700"}
                fontFamily={"Fredoka One"}
                fontWeight={500}
                lineHeight={1.1}
                fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
              >
                Belém Gás
              </Text>
            </Stack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <ButtonWhatsapp />
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
