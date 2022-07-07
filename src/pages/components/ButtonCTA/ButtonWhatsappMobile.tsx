import { Button, Link } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsappMobile() {
  return (
    <Link style={{ textDecoration: "none" }} href="" isExternal>
      <Button
        w={"full"}
        bgColor="brand.green400"
        shadow={"dark-lg"}
        _hover={{
          bg: "green.500",
          color: "green.100",
        }}
        boxShadow={
          "0px 1px 25px -5px rgb(72 186 119 / 100%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
        }
      >
        <BsWhatsapp />
      </Button>
    </Link>
  );
}
