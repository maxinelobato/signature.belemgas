import { chakra } from "@chakra-ui/react";

export default function CopyHeroH2() {
  return (
    <chakra.h2
      mb={6}
      fontSize="larger"
      fontWeight="medium"
      lineHeight="none"
      color="brandBelemGas.orange500"
      _dark={{
        color: "brandBelemGas.gray700",
      }}
    >
      Esqueceu de abastecer o gás?{" "}
    </chakra.h2>
  );
}
