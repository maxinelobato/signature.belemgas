import { Box, BoxProps } from "@chakra-ui/react";

export const BoxGradientCH = (props: BoxProps) => (
  <Box
    p="4"
    maxW="auto"
    bgGradient="linear(to-r, transparent, blackAlpha.500)"
    rounded="md"
    {...props}
  />
);
