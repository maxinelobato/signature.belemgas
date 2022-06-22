import { Image, ImageProps } from "@chakra-ui/react";

export default function ImageHero(props: ImageProps) {
  return (
    <Image
      w="lg"
      rounded="lg"
      src="img/delivery.png"
      alt="Hellonext feedback boards software screenshot"
      {...props}
    />
  );
}
