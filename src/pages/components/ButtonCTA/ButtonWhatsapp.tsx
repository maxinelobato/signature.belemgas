import { Button, Link } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhatsapp() {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href="https://api.whatsapp.com/send?phone=5591981450356&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20g%C3%A1s%2C%20te%20achei%20pelo%20google"
      isExternal
    >
      <Button
        w={"full"}
        bgColor="brand.green400"
        shadow={"dark-lg"}
        textTransform={"uppercase"}
        _hover={{
          bg: "green.500",
          color: "green.100",
        }}
        boxShadow={
          "0px 1px 25px -5px rgb(72 186 119 / 60%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
        }
        leftIcon={<BsWhatsapp size={"1.4rem"} />}
      >
        Peça seu Gás!
      </Button>
    </Link>
  );
}
