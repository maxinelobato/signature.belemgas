import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxBGSectionOne(props: BoxProps) {
  return (
    <Box
      bgGradient="linear(to-r, brand.orange400, brand.green800)"
      {...props}
    />
  );
}
