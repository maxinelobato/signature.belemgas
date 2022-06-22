import { Button, ButtonProps } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsapp(props: ButtonProps) {
  return (
    <Button
      {...props}
      leftIcon={<BsWhatsapp size={30} />}
      px={10}
      fontSize={"lg"}
      rounded={"lg"}
      bgColor="brandBelemGas.orange500"
      size="lg"
      boxShadow={
        "0px 1px 25px -5px rgb(222 112 34 / 88%), 0 10px 10px -5px rgb(222 112 34 / 83%)"
      }
      _hover={{
        bg: "brandBelemGas.orange100",
        color: "brandBelemGas.orange500",
      }}
      _focus={{
        bg: "brandBelemGas.orange500",
      }}
    >
      (91) 99999-9999
    </Button>
  );
}
