import {
  Box,
  VStack,
  Button,
  Text,
  Grid,
  GridItem,
  useBreakpointValue,
  Flex,
  Stack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import "@fontsource/fredoka-one";
import { BsWhatsapp } from "react-icons/bs";

export default function CTA() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
      }}
      gap={4}
    >
      <GridItem colSpan={1}>
        <VStack alignItems="center" spacing="20px">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={7}>
              <Text
                color={"red.800"}
                fontFamily={"Fredoka One"}
                fontWeight={500}
                lineHeight={1.1}
                fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              >
                Belém Gás
              </Text>
              <Box>
                <Button
                  colorScheme="whatsapp"
                  size="lg"
                  leftIcon={<BsWhatsapp />}
                >
                  (91) 99999-9999
                </Button>
              </Box>
            </Stack>
          </Flex>
          <Box
            bgGradient="linear(to-r, transparent, green.500)"
            rounded="md"
            p={6}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              Estava cozinhando e se esqueceu de abastecer o gás? Não tem
              problema!
            </Text>
          </Box>
          <Text
            p={6}
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Basta fazer uma ligação ou falar com a nossa equipe pelo whatsapp e
            eles levarão até o conforto da sua casa!
          </Text>
          <Box p={6} mt={6}>
            <Button colorScheme="green" size="md">
              Ligue agora mesmo!
            </Button>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}
