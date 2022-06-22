import { Button, ButtonProps } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonCTA(props: ButtonProps) {
  return (
    <Button
      {...props}
      px={10}
      fontSize={"lg"}
      rounded={"lg"}
      bgColor="green.900"
      size="lg"
      leftIcon={<BsWhatsapp size={30} />}
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
    >
      (91) 99999-9999
    </Button>
  );
}
