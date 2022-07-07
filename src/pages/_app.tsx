import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import ButtonFramer from "./components/ButtonCTA/ButtonFramer";
// import FBPixel from "./components/Analytics/FBPixel";
// import GAnalytics from "./components/Analytics/GAnalytics";
import GTag from "./components/Analytics/GTag";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      orange400: "#ED8936",
      green400: "#48BB78",
      green800: "#22543D",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {/* <FBPixel />
      <GAnalytics /> */}
      <GTag />
      <ButtonFramer />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
