import { Box, ImageProps, Image } from "@chakra-ui/react";

export default function LogoBelemGas(props: ImageProps) {
  return (
    <Box>
      <Image
        css={{ width: "100%", height: "auto", maxWidth: "300px" }}
        src="/img/logo1.svg"
        boxSize="sm"
        alt="Belém Gás"
        {...props}
      />
    </Box>
  );
}
