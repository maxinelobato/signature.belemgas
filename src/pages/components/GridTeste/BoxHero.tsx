import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxHero(props: BoxProps) {
  return <Box w="container.xl" px={8} py={24} mx="auto" {...props} />;
}
