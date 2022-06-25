import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGPage(props: BoxProps) {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, brand.orange400, brand.green400, brand.green800, transparent)"
      {...props}
    />
  );
}
