import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxGradientCH(props: BoxProps) {
  return (
    <Box
      p="4"
      maxW="auto"
      bgGradient="linear(to-r, transparent, blackAlpha.500, transparent)"
      rounded="md"
      {...props}
    />
  );
}
