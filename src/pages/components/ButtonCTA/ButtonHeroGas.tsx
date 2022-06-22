import { Button, ButtonProps, Stack } from "@chakra-ui/react";

export default function ButtonHeroGas(props: ButtonProps) {
  return (
    <Stack
      direction={{
        base: "column",
        sm: "row",
      }}
      mb={{
        base: 4,
        md: 8,
      }}
      spacing={2}
      justifyContent={{
        sm: "left",
        md: "left",
      }}
    >
      <Button
        {...props}
        as="a"
        variant="solid"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        p={8}
        textTransform={"uppercase"}
        fontSize={"lg"}
        rounded={"lg"}
        bgColor="green.900"
        boxShadow={
          "0px 1px 25px -5px rgb(154 230 180 / 88%), 0 10px 10px -5px rgb(154 230 180 / 83%)"
        }
        _hover={{
          bg: "green.500",
          color: "green.100",
        }}
        _focus={{
          bg: "blue.500",
        }}
        w={{
          base: "full",
          sm: "auto",
        }}
        mb={{
          base: 2,
          sm: 0,
        }}
        cursor="pointer"
      >
        Adquira seu Gás agora
      </Button>
    </Stack>
  );
}
