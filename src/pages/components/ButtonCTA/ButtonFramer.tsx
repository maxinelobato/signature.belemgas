import { IconButton, keyframes, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function ButtonFramer() {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        style={{ textDecoration: "none" }}
        href="https://api.whatsapp.com/send?phone=5591981450356&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20g%C3%A1s%2C%20te%20achei%20pelo%20google"
        isExternal
      >
        <IconButton
          as={motion.div}
          animation={animation}
          display="flex"
          transition="0.1s linear"
          bgGradient="linear(to-l, whatsapp.500, whatsapp.400)"
          aria-label="IconButton"
          size="sm"
          icon={<BsWhatsapp size={20} />}
          bgColor="whatsapp.500"
          _hover={{
            bg: "whatsapp.400",
            textColor: "whiteAlpha.900",
          }}
          boxShadow={
            "0px 1px 25px -5px rgb(72 186 119 / 100%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
          }
        />
      </Link>
    </Stack>
  );
}
