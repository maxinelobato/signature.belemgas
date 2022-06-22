import { Flex, FlexProps } from "@chakra-ui/react";

export default function FlexImagePage(props: FlexProps) {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      bgImage={"/img/liquigas.svg"}
      bgSize={"cover"}
      bgPosition={"center center"}
      {...props}
    />
  );
}
