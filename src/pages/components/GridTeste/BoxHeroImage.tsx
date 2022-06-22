import { Box, BoxProps, Center, Container } from "@chakra-ui/react";

export const BoxHeroImage = (props: BoxProps) => (
  <Container>
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
  </Container>
);
