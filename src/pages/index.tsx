import type { NextPage } from "next";
import Nav from "./components/Navs/Nav";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SectionTwo from "./components/Sections/SectionTwo";
import BoxBGPage from "./components/StructureProps/BoxBGPage";
import StackPropPage from "./components/StructureProps/StackPropPage";

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
