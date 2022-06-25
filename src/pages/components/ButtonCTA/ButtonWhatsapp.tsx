import { Button, ButtonProps } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsapp(props: ButtonProps) {
  return (
    <Button
      bgColor="brand.green400"
      shadow={"dark-lg"}
      size="lg"
      w="fit-content"
      leftIcon={<BsWhatsapp size={20} />}
      _hover={{
        bg: "green.500",
        color: "green.100",
      }}
      boxShadow={
        "0px 1px 25px -5px rgb(72 186 119 / 100%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
      }
      {...props}
    >
      WhatsApp
    </Button>
  );
}
