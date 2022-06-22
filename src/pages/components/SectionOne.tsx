import { Stack, Flex } from "@chakra-ui/react";
import MessageHero from "./MessageHero";

export default function SectionOne() {
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          w={"full"}
          h={"100vh"}
          bgImage={"/img/liquigas.svg"}
          bgSize={"cover"}
          bgPosition={"center center"}
        >
          <MessageHero />
        </Flex>
      </Stack>
    </>
  );
}
