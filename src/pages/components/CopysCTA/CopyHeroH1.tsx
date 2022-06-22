import { chakra, Text } from "@chakra-ui/react";

export default function CopyHeroH1() {
  return (
    <chakra.h1
      mb={6}
      fontSize="6xl"
      fontWeight="medium"
      lineHeight="none"
      letterSpacing="tight"
      color="brandBelemGas.orange500"
      _dark={{
        color: "brandBelemGas.orange100",
      }}
    >
      Esqueceu de abastecer o gás?{" "}
      <Text
        w="full"
        bgClip="text"
        bgGradient="linear(to-r, brandBelemGas.green200, brandBelemGas.blue200)"
        fontWeight="extrabold"
      >
        Saiba que podemos levar
      </Text>{" "}
      até você!
    </chakra.h1>
  );
}
