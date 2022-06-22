import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import SectionOne from "./components/SectionOne";

const Home: NextPage = () => {
  return (
    <>
      <Box
        minH="100vh"
        bgGradient="linear(to-r, brandBelemGas.orange500, brandBelemGas.yellow300, brandBelemGas.orange500, brandBelemGas.red500)"
      >
        <SectionOne />
      </Box>
    </>
  );
};

export default Home;
