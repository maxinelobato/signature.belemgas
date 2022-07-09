import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../../lib/gtm";
import { FB_PIXEL_ID } from "../../lib/fpixel";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <title>Distribuidora Belém Gás</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A melhor distribuidora de Gás do Estado do Pará"
        />
        <meta property="og:title" content="Distribuidora Belém Gás" />
        <meta
          property="og:description"
          content="A melhor distribuidora de Gás do Estado do Pará"
        />
        <meta property="og:url" content="https://belemgas.vercel.app/" />
        <meta property="og:type" content="landingpage" />
        <body>
          {/* 👇 Here's the script */}
          <noscript>
            <img
              alt="Facebook Pixel"
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
