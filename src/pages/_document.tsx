import Document, { Html, Main, NextScript, Head } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmber_W_Lt.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmber_W_Rg.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmber_W_Bd.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmberDisplay_W_Rg.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmberDisplay_W_Md.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/learn/fonts/AmazonEmberDisplay_W_Bd.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <script
            src="https://a0.awsstatic.com/s_code/js/3.0/awshome_s_code.js"
            defer
          ></script>
          <script
            src="/learn/scripts/aws-ux-shortbread-v1-0-14.js"
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
