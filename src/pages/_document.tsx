import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <title>Belém Gás - Liquigás</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
