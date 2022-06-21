import { Box, BoxProps } from "@chakra-ui/react";

export function BgBelemGas(props: BoxProps) {
  return (
    <Box
      {...props}
      minH="100vh"
      bgGradient="linear-gradient(to right, brandBelemGas.orange500, brandBelemGas.yellow300 ,brandBelemGas.orange500)"
    />
  );
}
