import {
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import HeroCopy from "../CopysCTA/CopyHero";

export default function Hero() {
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
          <HeroCopy />
        </Flex>
      </Stack>
      {/**SECTION TWO */}
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Chame a Belém Gás
              </Text>
              <br />{" "}
              <Text
                color={"blue.600"}
                as={"span"}
                fontSize="5xl"
                textTransform="uppercase"
              >
                whatsapp
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Nos chame sempre que precisar!
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Fale conosco no Whatsapp!
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"contain"}
            src={"/img/whatsappcall.png"}
          />
        </Flex>
      </Stack>
    </>
  );
}
