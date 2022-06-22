import { Stack, StackProps } from "@chakra-ui/react";

export default function StackPropPage(props: StackProps) {
  return (
    <Stack
      transition="all 0.15s ease-out"
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      {...props}
    />
  );
}
