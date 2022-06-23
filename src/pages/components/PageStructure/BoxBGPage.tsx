import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGPage(props: BoxProps) {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, brandBelemGas.orange500, brandBelemGas.yellow300, brandBelemGas.orange500, brandBelemGas.red500)"
      {...props}
    />
  );
}
