import type { NextPage } from "next";
import FooterBelemGas from "./components/Footer/FooterBelemGas";
import Nav from "./components/Navs/Nav";
import SectionFour from "./components/Sections/SectionFour";
import SectionOne from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SectionTwo from "./components/Sections/SectionTwo";
import BoxBGSectionFour from "./components/StructureProps/BoxBGSectionFour";
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
      </BoxBGSectionTwo>
      <BoxBGSectionThree>
        <SectionThree />
      </BoxBGSectionThree>
      <BoxBGSectionFour>
        <SectionFour />
      </BoxBGSectionFour>
      <BoxBGSectionTwo>
        <FooterBelemGas />
      </BoxBGSectionTwo>
    </>
  );
};

export default Home;
