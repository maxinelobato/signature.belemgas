import { Image, Link } from "@chakra-ui/react";

export default function LogoBelemGas() {
  const Zoom = require("react-reveal/Zoom");

  return (
    <Zoom duration={600}>
      <Link href="#">
        <Image
          css={{ width: "100%", height: "auto", maxWidth: "300px" }}
          src="/img/logo1.svg"
          boxSize="sm"
          alt="Belém Gás"
        />
      </Link>
    </Zoom>
  );
}
