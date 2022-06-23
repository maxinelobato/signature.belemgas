import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import BrandBelemGas from "./components/Brands/BrandBelemGas";
import Nav from "./components/Brands/Nav";
import ButtonHeroGas from "./components/ButtonCTA/ButtonHeroGas";
import BoxGradientCH from "./components/CopysCTA/BoxGradientCH";
import CopyHeroH1 from "./components/CopysCTA/CopyHeroH1";
import CopyHeroH2 from "./components/CopysCTA/CopyHeroH2";
import BoxHero from "./components/HerosCTA/BoxHero";
import BoxHeroImage from "./components/HerosCTA/BoxHeroImage";
import BoxPropHero from "./components/HerosCTA/BoxPropHero";
import ImageHero from "./components/HerosCTA/ImageHero";
import PageFirst from "./components/PageFirst";
import BoxBGPage from "./components/PageStructure/BoxBGPage";
import FlexImagePage from "./components/PageStructure/FlexImagePage";
import StackPropPage from "./components/PageStructure/StackPropPage";

const Home: NextPage = () => {
  return (
    <BoxBGPage>
      <StackPropPage>
        <Nav />
        <PageFirst />
        {/* <StackPropPage>
        <FlexImagePage>
          <BoxHero>
            <BoxPropHero>
              <BrandBelemGas />
              <BoxGradientCH>
                <CopyHeroH1 />
                <CopyHeroH2 />
                <ButtonHeroGas />
              </BoxGradientCH>
            </BoxPropHero>
            <BoxHeroImage>
              <ImageHero />
            </BoxHeroImage>
          </BoxHero> */}
        {/** FLEX - BG Gradient */}
        {/* </FlexImagePage> */}
        {/** STACK - Coluna e Linha */}
        {/* </StackPropPage> */}
        {/** BOX - BG Gradient */}
      </StackPropPage>
    </BoxBGPage>
  );
};

export default Home;
