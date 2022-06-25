import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  BsFillCreditCard2BackFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { MdCreditScore } from "react-icons/md";
import React from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  label: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { label, stat, icon } = props;
  return (
    <Stat
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow="dark-lg"
      rounded={"lg"}
      bgColor={"whiteAlpha.300"}
      color={"whiteAlpha.900"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel
            fontSize={"2xl"}
            fontWeight={"medium"}
            textTransform={"uppercase"}
          >
            {stat}
          </StatLabel>
          <StatLabel fontSize={"lg"} fontWeight={"medium"}>
            {label}
          </StatLabel>
        </Box>
        <Box my={"auto"} color="whiteAlpha.900" alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function SectionThree() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }} p={16}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        fontFamily={"Krona One"}
      >
        A Belém Gás facilita para você
      </chakra.h1>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          stat={"Cartão de Crédito"}
          label={"Até 2x SEM JUROS"}
          icon={<BsFillCreditCard2BackFill size={"3em"} />}
        />
        <StatsCard
          stat={"Cartão de Débito"}
          label={"À Vista"}
          icon={<BsFillCreditCard2FrontFill size={"3em"} />}
        />
        <StatsCard
          stat={"Pix"}
          label={"À Vista"}
          icon={<MdCreditScore size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
