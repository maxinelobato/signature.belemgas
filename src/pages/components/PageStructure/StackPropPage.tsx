import { Stack, StackProps } from "@chakra-ui/react";

export default function StackPropPage(props: StackProps) {
  return (
    <Stack
      bgImage="img/liquigas.svg"
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
      minH="100vh"
      {...props}
    />
  );
}
