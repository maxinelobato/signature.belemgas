import { ImageProps, Image, Link, Box } from "@chakra-ui/react";

export default function LogoBelemGas(props: ImageProps) {
  return (
    <Box
      as="button"
      borderRadius="md"
      bgGradient="linear(to-r, whiteAlpha.800, transparent)"
      _hover={{
        bg: "whiteAlpha.800",
      }}
    >
      <Link href="#">
        <Image
          css={{ width: "100%", height: "auto", maxWidth: "300px" }}
          src="/img/logo1.svg"
          boxSize="sm"
          alt="Belém Gás"
          {...props}
        />
      </Link>
    </Box>
  );
}
