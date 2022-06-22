import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import SectionOne from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";

const Home: NextPage = () => {
  return (
    <>
      <Box
        minH="100vh"
        bgGradient="linear(to-r, brandBelemGas.orange500, brandBelemGas.yellow300, brandBelemGas.orange500, brandBelemGas.red500)"
      >
        <SectionOne />
        <SectionTwo />
      </Box>
    </>
  );
};

export default Home;
