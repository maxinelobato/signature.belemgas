import {
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

export default function SectionTwo() {
  return (
    <>
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={16} flex={1} align={"center"} justify={"center"}>
          <Box bgColor="brand.green800" rounded="lg" p={10}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                textAlign={"left"}
                mb={4}
                color="whiteAlpha.800"
                fontFamily="Krona One"
                fontSize="5xl"
              >
                Uma empresa familiar, com o único objetivo de entregar à todas
              </Heading>
              <Text
                textAlign={"left"}
                py={3}
                color="brand.orange400"
                fontFamily="Krona One"
                as="h2"
                size="md"
                fontSize="25"
              >
                as famílias de belém do Pará.
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
          </Box>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Delivery Belém Gás"}
            objectFit={"cover"}
            src={"/img/bgfamiliareunida.svg"}
          />
        </Flex>
      </Stack>
    </>
  );
}
