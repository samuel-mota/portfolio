import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:url" content="https://samuelmota.dev" />
          <meta
            property="og:image"
            content="https://samuelmota.dev/assets/portfolio-samuelmota.jpg"
          />
          <meta
            property="og:description"
            content="Portfolio made by Samuel Mota inspired by Star Wars."
          />
          <meta property="og:title" content="Samuel Mota | Portfolio" />
          <meta property="og:site_name" content="Samuel Mota Portfolio" />
          <meta
            name="description"
            content="Portfolio made by Samuel Mota inspired by Star Wars."
          />
          <meta name="author" content="Samuel Mota" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bilbo&family=Bilbo+Swash+Caps&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <title>Samuel Mota | Portfolio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
