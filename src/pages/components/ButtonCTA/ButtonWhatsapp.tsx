import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsapp(props: ButtonProps) {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        colorScheme={"orange"}
        shadow={"dark-lg"}
        height="4rem"
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        leftIcon={<BsWhatsapp size={40} />}
        {...props}
      >
        Whatsapp
      </Button>
    </Flex>
  );
}
