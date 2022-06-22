import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandBelemGas: {
    orange100: "#FEEBC8",
    orange500: "#DD6B20",
    yellow300: "#F6E05E",
    yellow500: "#D69E2E",
    red500: "#E53E3E",
    green600: "#2F855A",
    green200: "#9AE6B4",
    blue200: "#90CDF4",
    gray900: "#171923",
    gray700: "#2D3748",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ colors, config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
