import { Image, Box, SimpleGrid, Heading } from "@chakra-ui/react";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

export default function SectionThree() {
  return (
    <Box p={8} maxW="full" mx={"auto"} px="6rem">
      <Heading
        color={"brand.green800"}
        textAlign={"center"}
        fontFamily={"Krona One"}
        fontWeight={600}
        marginBottom={16}
      >
        Formas de Pagamento
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={2}>
        <Box maxW={"auto"} w={"full"} rounded={"md"} overflow={"hidden"}>
          <Image
            w={"full"}
            objectFit="cover"
            src="/img/americanexpress.svg"
            alt="..."
          />
        </Box>
        <Box
          bgColor={"whiteAlpha.900"}
          maxW={"auto"}
          w={"full"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            mt={5}
            w={"full"}
            objectFit="cover"
            src="/img/mastercard.svg"
            alt="..."
          />
        </Box>
        <Box
          bgColor={"whiteAlpha.900"}
          maxW={"auto"}
          w={"full"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image w={"full"} objectFit="cover" src="/img/visa.svg" alt="..." />
        </Box>
        <Box
          bgColor={"black"}
          maxW={"auto"}
          w={"full"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            mt={20}
            w={"full"}
            objectFit="cover"
            src="/img/elo.svg"
            alt="..."
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
