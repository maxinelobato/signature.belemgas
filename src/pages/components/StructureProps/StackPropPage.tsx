import { Stack, StackProps } from "@chakra-ui/react";

export default function StackPropPage(props: StackProps) {
  return (
    <Stack
      bgImage="img/bgbelemgas.svg"
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
      minH="50vh"
      {...props}
    />
  );
}
