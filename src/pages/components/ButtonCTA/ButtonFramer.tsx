import { IconButton, keyframes, Stack } from "@chakra-ui/react";
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

export function ButtonFramer() {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      bottom="30px"
      left="30px"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        as={motion.div}
        animation={animation}
        display="flex"
        transition="0.1s linear"
        bgGradient="linear(to-l, whatsapp.500, whatsapp.400)"
        aria-label="WhatsApp"
        size="sm"
        icon={<BsWhatsapp size={20} />}
        bgColor="whatsapp.500"
        _hover={{
          bg: "whatsapp.400",
          textColor: "beige",
        }}
        boxShadow={
          "0px 1px 25px -5px rgb(72 186 119 / 100%), 0 10px 10px -5px rgb(72 186 119 / 43%)"
        }
      />
    </Stack>
  );
}
