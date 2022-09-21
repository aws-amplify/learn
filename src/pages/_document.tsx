import Document, { Html, Main, NextScript, Head } from "next/document";
import crypto from "crypto";
import { HtmlProps } from "next/dist/shared/lib/utils";

const cspHashOf = (text: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};

const ANALYTICS_CSP = {
  all: {
    connect: [
      "amazonwebservices.d2.sc.omtrdc.net",
      "aws.demdex.net",
      "dpm.demdex.net",
      "cm.everesttech.net",
    ],
    img: [
      "amazonwebservices.d2.sc.omtrdc.net",
      "aws.demdex.net",
      "dpm.demdex.net",
      "cm.everesttech.net",
      "images.unsplash.com",
    ],
    frame: ["aws.demdex.net", "dpm.demdex.net"],
    script: ["a0.awsstatic.com"],
  },
  prod: {
    connect: ["d2c.aws.amazon.com", "vs.aws.amazon.com", "a0.awsstatic.com"],
    img: ["a0.awsstatic.com"],
    frame: [],
  },
};

const getCspContent = (context: HtmlProps) => {
  const cspInlineScriptHash = cspHashOf(
    NextScript.getInlineScriptSource(context)
  );

  // Dev environment
  if (process.env.NODE_ENV !== "production") {
    return `upgrade-insecure-requests;
      default-src 'none';
      prefetch-src 'self';
      style-src 'self' 'unsafe-inline';
      font-src 'self' data:;
      frame-src 'self' https://www.youtube-nocookie.com ${ANALYTICS_CSP.all.frame.join(
        " "
      )};
      connect-src 'self' *.shortbread.aws.dev *.amazonaws.com ws: ${ANALYTICS_CSP.all.connect.join(
        " "
      )};
      img-src 'self' images.unsplash.com ${ANALYTICS_CSP.all.img.join(" ")}; 
      script-src 'unsafe-eval' 'self' ${ANALYTICS_CSP.all.script.join(
        " "
      )} ${cspInlineScriptHash};
    `;
  }

  // Prod environment
  return `upgrade-insecure-requests;
    default-src 'none';
    prefetch-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    frame-src 'self' https://www.youtube-nocookie.com ${ANALYTICS_CSP.all.frame.join(
      " "
    )};
    connect-src 'self' *.shortbread.aws.dev ws: ${[
      ...ANALYTICS_CSP.all.connect,
      ...ANALYTICS_CSP.prod.connect,
    ].join(" ")};
    img-src 'self' images.unsplash.com ${ANALYTICS_CSP.all.img.join(" ")};
    script-src 'self' ${ANALYTICS_CSP.all.script.join(
      " "
    )} ${cspInlineScriptHash};
  `;
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content={getCspContent(this.props)}
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmber_W_Lt.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmber_W_Rg.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmber_W_Bd.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmberDisplay_W_Rg.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmberDisplay_W_Md.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AmazonEmberDisplay_W_Bd.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <script
            src="https://a0.awsstatic.com/s_code/js/3.0/awshome_s_code.js"
            defer
          ></script>
          <script src="/scripts/aws-ux-shortbread-v1-0-14.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
