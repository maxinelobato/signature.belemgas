import { Box, BoxProps } from "@chakra-ui/react";

export default function BoxPropHero(props: BoxProps) {
  return <Box w="full" h="full" mx="auto" textAlign="left" {...props} />;
}
