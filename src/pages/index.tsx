import type { NextPage } from "next";
import CardsSectionTwo from "./components/Cards/CardsSectionTwo";
import FooterBelemGas from "./components/Footer/FooterBelemGas";
import Nav from "./components/Navs/Nav";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SectionTwo from "./components/Sections/SectionTwo";
import BoxBGSectionOne from "./components/StructureProps/BoxBGSectionOne";
import BoxBGSectionThree from "./components/StructureProps/BoxBGSectionThree";
import BoxBGSectionTwo from "./components/StructureProps/BoxBGSectionTwo";
import StackPropPage from "./components/StructureProps/StackPropPage";

const Home: NextPage = () => {
  return (
    <>
      <BoxBGSectionOne>
        <StackPropPage>
          <Nav />
          <SectionOne />
        </StackPropPage>
      </BoxBGSectionOne>
      <BoxBGSectionTwo>
        <SectionTwo />
        <CardsSectionTwo />
      </BoxBGSectionTwo>
      <BoxBGSectionThree>
        <SectionThree />
      </BoxBGSectionThree>
      <FooterBelemGas />
    </>
  );
};

export default Home;
