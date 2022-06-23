import {
  chakra,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";

export default function BrandBelemGas() {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex alignItems={"center"}>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Text
                color={"orange.700"}
                fontFamily={"Fredoka One"}
                fontWeight={500}
                lineHeight={1.1}
                fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
              >
                Belém Gás
              </Text>
              <Flex alignItems={"center"}>
                <Stack direction={"row"}>
                  <ButtonWhatsapp />
                </Stack>
              </Flex>
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
