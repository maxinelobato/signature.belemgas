import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ButtonCTA from "./ButtonCTA";
import "@fontsource/fredoka-one";

export default function Navbar() {
  return (
    <>
      <Flex h={32} alignItems={"center"} justifyContent={"space-between"}>
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
            <ButtonCTA />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
