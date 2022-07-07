import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../../lib/gtm";
// import { FB_PIXEL_ID } from "../../lib/fpixel";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          {/* <noscript>
            <img
              alt="Facebook Pixel"
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <title>Distribuidora Belém Gás</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
