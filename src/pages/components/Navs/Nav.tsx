import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";
import ButtonWhatsappMobile from "../ButtonCTA/ButtonWhatsappMobile";
import LogoBelemGas from "../IdVisual/LogoBelemGas";

// const innerBoxStyles = {
//   textShadow: "0 0 20px white",
// };

export default function Nav() {
  const mobileNav = useDisclosure();

  return (
    <>
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
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      display={{ base: "flex", md: "none" }}
                      aria-label="Open Menu"
                      fontSize="20px"
                      bgColor={"green.800"}
                      icon={<HamburgerIcon />}
                      onClick={mobileNav.onOpen}
                    />
                    <MenuList
                      bgColor={"green.800"}
                      display={mobileNav.isOpen ? "flex" : "none"}
                      flexDirection="column"
                    >
                      <MenuItem minH="48px" justifyContent={"center"}>
                        <CloseButton
                          aria-label="Close menu"
                          onClick={mobileNav.onClose}
                        />
                      </MenuItem>
                      <MenuItem justifyContent={"center"}>
                        <ButtonWhatsapp />
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
