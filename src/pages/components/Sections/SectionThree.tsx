import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  BsFillCreditCard2BackFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <VStack>
        <Flex
          w={16}
          h={16}
          justifyContent={"center"}
          align={"center"}
          justify={"center"}
          color={"whiteAlpha.800"}
          rounded={"full"}
          bg={"brand.green800"}
          mb={1}
        >
          {icon}
        </Flex>
      </VStack>
      <VStack>
        <Text
          fontWeight={600}
          fontFamily={"Krona One"}
          color={"whiteAlpha.800"}
        >
          {title}
        </Text>
      </VStack>
      <Text
        color={"whiteAlpha.800"}
        fontFamily={"Open Sans"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function SectionThree() {
  return (
    <Box p={8} maxW="full" mx={"auto"} px="6rem">
      <Heading
        color={"whiteAlpha.800"}
        textAlign={"center"}
        fontFamily={"Krona One"}
        fontWeight={600}
        marginBottom={16}
      >
        Formas de Pagamento
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={BsFillCreditCard2BackFill} w={10} h={10} />}
          title={"Crédito"}
          text={"2x Sem Juros"}
        />
        <Feature
          icon={<Icon as={BsFillCreditCard2FrontFill} w={10} h={10} />}
          title={"Débito"}
          text={"1x Sem Juros"}
        />
        <Feature
          icon={<Icon as={FaMoneyCheckAlt} w={10} h={10} />}
          title={"Pix"}
          text={"À Vista"}
        />
      </SimpleGrid>
    </Box>
  );
}
