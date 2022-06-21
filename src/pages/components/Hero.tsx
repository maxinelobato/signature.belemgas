import { Stack, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import CTA from "./CTA";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"/img/liquigas.svg"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justifyContent={"center"}
        align={"center"}
        px={useBreakpointValue({ base: 4, md: 2 })}
      >
        <Stack maxW={"7xl"} align={"start"} spacing={6}>
          <CTA />
        </Stack>
      </VStack>
    </Flex>
  );
}
