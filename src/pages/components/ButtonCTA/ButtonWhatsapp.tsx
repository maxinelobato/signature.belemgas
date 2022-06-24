import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsapp(props: ButtonProps) {
  return (
    <Button
      colorScheme={"orange"}
      shadow={"dark-lg"}
      size="lg"
      _focus={{ boxShadow: "none" }}
      w="fit-content"
      leftIcon={<BsWhatsapp size={20} />}
      {...props}
    >
      WhatsApp
    </Button>
  );
}
