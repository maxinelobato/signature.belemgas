import { Stack, StackProps } from "@chakra-ui/react";

export const StackPropPage = (props: StackProps) => (
  <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} {...props} />
);
