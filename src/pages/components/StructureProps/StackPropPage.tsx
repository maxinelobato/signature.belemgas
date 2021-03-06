import { Stack, StackProps } from "@chakra-ui/react";

export default function StackPropPage(props: StackProps) {
  return (
    <Stack
      bgImage="img/bgbelemgas.png"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      {...props}
    />
  );
}
