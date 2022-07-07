import { Image, Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

export default function SectionThree() {
  return (
    <Box p={8} maxW="60rem" mx={"auto"}>
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
          Cartão de Crédito / Débito / Pix / Dinheiro à Vista
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, lg: 16 }}>
        <Image
          borderRadius="lg"
          objectFit="cover"
          src="/img/mastercard.svg"
          alt="..."
        />
        <Image
          borderRadius="lg"
          objectFit="cover"
          src="/img/visa.svg"
          alt="..."
        />
        <Image
          borderRadius="lg"
          objectFit="cover"
          src="/img/elo.svg"
          alt="..."
        />
        <Image
          borderRadius="lg"
          objectFit="cover"
          src="/img/pix.svg"
          alt="..."
        />
      </SimpleGrid>
    </Box>
  );
}
