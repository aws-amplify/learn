import Head from "next/head";
import {
  AmplifyProvider,
  Grid,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { studioTheme } from "../../ui-components";
import { LearnFooter } from "../LearnFooter";
import { LearnNavBar } from "../LearnNavBar";

export function Layout({ children }: { children: any }) {
  const [isMobile, setIsMobile] = useState(false);

  const mobileBreakpointValue = useBreakpointValue({
    base: "mobile",
    small: "mobile",
    medium: "mobile",
    large: "default",
  });

  useEffect(() => {
    console.log(mobileBreakpointValue);
    if (mobileBreakpointValue === "mobile") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobileBreakpointValue]);

  const meta = {
    title: "Learn Amplify",
    description:
      "Learn Amplify - Learn how to use Amplify to develop and deploy cloud-powered mobile and web apps.",
    url: "https://learn.amplify.aws/",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:description"
          content={meta.description}
          key="og:description"
        />
        <meta property="og:url" content={meta.url} key="og:url" />
        <meta
          property="og:image"
          content="https://docs.amplify.aws/assets/ogp.jpg"
          key="og:image"
        />
        <meta
          property="description"
          content={meta.description}
          key="description"
        />
        <meta property="twitter:card" content="summary" key="twitter:card" />
        <meta
          property="twitter:title"
          content={meta.title}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={meta.description}
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content="https://docs.amplify.aws/assets/ogp.jpg"
          key="twitter:image"
        />
      </Head>
      <AmplifyProvider theme={studioTheme}>
        <LearnNavBar isMobile={isMobile} />
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr min(120ch, 100%) 1fr",
          }}
          marginLeft={{
            base: "32px",
            small: "32px",
            medium: "64px",
            large: "129px",
          }}
          marginRight={{
            base: "32px",
            small: "32px",
            medium: "64px",
            large: "129px",
          }}
          marginTop={{
            base: "32px",
            small: "32px",
            medium: "64px",
            large: "128px",
          }}
          marginBottom={{
            base: "114px",
            small: "114px",
            medium: "118px",
            large: "143px",
          }}
        >
          {children}
        </Grid>
        <LearnFooter isMobile={isMobile} />
      </AmplifyProvider>
    </>
  );
}
