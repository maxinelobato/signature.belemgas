import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxHeroImage(props: BoxProps) {
  return (
    <Box
      boxSize="sm"
      w={{
        base: "full",
        md: 10 / 12,
      }}
      mx="auto"
      mt={0}
      textAlign="center"
      {...props}
    />
  );
}
