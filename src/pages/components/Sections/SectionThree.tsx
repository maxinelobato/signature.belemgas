import { Image, Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

export default function SectionThree() {
  return (
    <Box p={16} maxW="85rem" mx={"auto"} px="2rem">
      <Heading
        color={"brand.green800"}
        textAlign={"center"}
        fontFamily={"Krona One"}
        fontWeight={600}
        marginBottom={10}
      >
        Formas de Pagamento <br />
        <Text
          as="span"
          fontFamily={"Open Sans"}
          fontWeight={100}
          color="brand.green800"
        >
          Cartão de Crédito / Débito / Pix
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <Box maxW={"auto"} w={"full"} rounded={"md"} overflow={"hidden"}>
          <Image
            borderRadius="lg"
            objectFit="cover"
            src="/img/mastercard.svg"
            alt="..."
          />
        </Box>
        <Box maxW={"auto"} w={"full"} rounded={"md"} overflow={"hidden"}>
          <Image
            borderRadius="lg"
            objectFit="cover"
            src="/img/visa.svg"
            alt="..."
          />
        </Box>
        <Box maxW={"auto"} w={"full"} rounded={"md"} overflow={"hidden"}>
          <Image
            borderRadius="lg"
            objectFit="cover"
            src="/img/elo.svg"
            alt="..."
          />
        </Box>
        <Box maxW={"auto"} rounded={"md"} overflow={"hidden"}>
          <Image
            borderRadius="lg"
            objectFit="cover"
            src="/img/pix.svg"
            alt="..."
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
