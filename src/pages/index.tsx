import type { NextPage } from "next";
import BoxBGPage from "./components/BoxBGPage";
import Nav from "./components/Nav";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SectionTwo from "./components/Sections/SectionTwo";
import StackPropPage from "./components/StackPropPage";

const Home: NextPage = () => {
  return (
    <BoxBGPage>
      <StackPropPage>
        <Nav />
        <SectionOne />
      </StackPropPage>
      <SectionTwo />
      <SectionThree />
    </BoxBGPage>
  );
};

export default Home;
