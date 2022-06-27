import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import ButtonFramer from "./components/ButtonCTA/ButtonFramer";
import "@fontsource/krona-one";
import "@fontsource/open-sans";

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
  fonts: {
    heading: `'Krona One', sans-serif`,
    text: `'Open Sans', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ButtonFramer />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
