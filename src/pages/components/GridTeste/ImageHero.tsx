import { Image, ImageProps } from "@chakra-ui/react";

export const ImageHero = (props: ImageProps) => (
  <Image
    w="lg"
    rounded="lg"
    src="img/delivery.png"
    alt="Hellonext feedback boards software screenshot"
    {...props}
  />
);
