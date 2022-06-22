import type { NextPage } from "next";
import BrandBelemGas from "./components/Brands/BrandBelemGas";
import ButtonHeroGas from "./components/ButtonCTA/ButtonHeroGas";
import BoxGradientCH from "./components/CopysCTA/BoxGradientCH";
import CopyHeroH1 from "./components/CopysCTA/CopyHeroH1";
import CopyHeroH2 from "./components/CopysCTA/CopyHeroH2";
import BoxHero from "./components/GridTeste/BoxHero";
import BoxHeroImage from "./components/GridTeste/BoxHeroImage";
import BoxPropHero from "./components/GridTeste/BoxPropHero";
import ImageHero from "./components/GridTeste/ImageHero";
import BoxBGPage from "./components/PageStructure/BoxBGPage copy";
import FlexImagePage from "./components/PageStructure/FlexImagePage";
import StackPropPage from "./components/PageStructure/StackPropPage";

const Home: NextPage = () => {
  return (
    <BoxBGPage>
      <StackPropPage>
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
          </BoxHero>
          {/** FLEX - BG Gradient */}
        </FlexImagePage>
        {/** STACK - Coluna e Linha */}
      </StackPropPage>
      {/** BOX - BG Gradient */}
    </BoxBGPage>
  );
};

export default Home;
