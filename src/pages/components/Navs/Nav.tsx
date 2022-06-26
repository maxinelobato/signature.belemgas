import { Box, Flex, Stack } from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import ButtonFacebook from "../ButtonCTA/ButtonFacebook";
import ButtonInstagram from "../ButtonCTA/ButtonInstagram";
import ButtonWhatsapp from "../ButtonCTA/ButtonWhatsapp";
import LogoBelemGas from "../IdVisual/LogoBelemGas";

const backgrounds = [`url("img/backdrop.svg")`];

export default function Nav() {
  return (
    <>
      <Box
        boxShadow="lg"
        bg="whiteAlpha.700"
        border="1px solid"
        borderColor="whiteAlpha.400"
        px="7rem"
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
          filter: "blur(80px)",
          transform: "scale(0.98)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          backgroundImage: backgrounds,
        }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <LogoBelemGas />
            </Stack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2}>
              <ButtonWhatsapp />
              <ButtonInstagram />
              <ButtonFacebook />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
