import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ButtonFacebook from "../ButtonCTA/ButtonFacebook";
import ButtonInstagram from "../ButtonCTA/ButtonInstagram";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";
import LogoBelemGas from "../IdVisual/LogoBelemGas";

const backgrounds = [`url("img/backdrop.svg")`];

export default function Nav() {
  const mobileNav = useDisclosure();
  return (
    <>
      <Box
        boxShadow="lg"
        bg="whiteAlpha.700"
        borderBottom="1px solid"
        borderColor="whiteAlpha.900"
        px={24}
        w={"full"}
        zIndex={999}
        position={"fixed"}
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
        }}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "full",
          maxW: "full",
          width: "full",
          filter: "blur(10rem)",
          transform: "scale(0.98)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          backgroundImage: backgrounds,
        }}
      >
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
              <ButtonInstagram />
              <ButtonFacebook />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open Menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
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
                bg="whiteAlpha.700"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <ButtonWhatsapp />
                <ButtonInstagram />
                <ButtonFacebook />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
