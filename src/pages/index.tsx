import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Box
        minH="100vh"
        bgGradient="linear(to-r, brandBelemGas.orange500, brandBelemGas.yellow300, brandBelemGas.orange500)"
      >
        <Hero />
      </Box>
    </>
  );
};

export default Home;
