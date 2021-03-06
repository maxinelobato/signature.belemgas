import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";
import LogoBelemGas from "../IdVisual/LogoBelemGas";
import { AiOutlineMenu } from "react-icons/ai";

// const innerBoxStyles = {
//   textShadow: "0 0 20px white",
// };

export default function Nav() {
  const mobileNav = useDisclosure();

  return (
    <Box
      boxShadow="lg"
      bg="whiteAlpha.500"
      borderBottom="1px solid"
      borderColor="whiteAlpha.600"
      px={20}
      w={"full"}
      zIndex={999}
      position={"fixed"}
    >
      <Box maxW="8xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
        <Box backdropFilter="auto" backdropBlur="1rem">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Flex display="flex" alignItems="center">
              <LogoBelemGas />
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <ButtonWhatsapp />
              </HStack>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open Menu"
                  fontSize="20px"
                  bgColor="green.800"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  color={"whiteAlpha.900"}
                  bg="green.800"
                  spacing={8}
                  rounded="lg"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <ButtonWhatsapp />
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
