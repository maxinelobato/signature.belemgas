import { Box, ImageProps, Image, Link } from "@chakra-ui/react";

export default function LogoBelemGas(props: ImageProps) {
  return (
    <Link href="#">
      <Image
        css={{ width: "100%", height: "auto", maxWidth: "300px" }}
        src="/img/logo1.svg"
        boxSize="sm"
        alt="Belém Gás"
        {...props}
      />
    </Link>
  );
}
