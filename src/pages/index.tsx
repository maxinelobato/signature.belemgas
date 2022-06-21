import type { NextPage } from "next";
import { BgBelemGas } from "./components/BgBelemGas";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <BgBelemGas>
        <Hero />
      </BgBelemGas>
    </>
  );
};

export default Home;
