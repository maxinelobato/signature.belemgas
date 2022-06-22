import { Box, BoxProps } from "@chakra-ui/react";

export const BoxBGPage = (props: BoxProps) => (
  <Box
    minH="100vh"
    bgGradient="linear(to-r, brandBelemGas.orange500, brandBelemGas.yellow300, brandBelemGas.orange500, brandBelemGas.red500)"
    {...props}
  />
);
