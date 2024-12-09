import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar">
      <Head >
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700&display=swap"
          />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
