import { Flex, FlexProps } from "@chakra-ui/react";

export const FlexImagePage = (props: FlexProps) => (
  <Flex
    w={"full"}
    h={"100vh"}
    bgImage={"/img/liquigas.svg"}
    bgSize={"cover"}
    bgPosition={"center center"}
    {...props}
  />
);
