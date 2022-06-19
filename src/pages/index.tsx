import type { NextPage } from "next";
import Head from "next/head";

import config from "../aws-exports";
import { Amplify } from "aws-amplify";

import {
  Card,
  Grid,
  ThemeProvider,
  useBreakpointValue
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import {
  NavBar,
  LearnFooter,
  LearnFooterMobile,
  NavBarMobileCollapsed,
  studioTheme,
} from "../ui-components";
import { HomePageCardLayoutCollection } from "../components/HomePageCardLayoutCollection";
import { useEffect, useState } from "react";
import { ActionHeroLayout } from "../components/ActionHeroLayout";

Amplify.configure(config);

const Home: NextPage = () => {
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
      <ThemeProvider theme={studioTheme}>
        {isMobile ? (
          <NavBarMobileCollapsed
            width="100vw"
            overrides={{ "Frame 396": { gap: "0" } }}
          />
        ) : (
          <NavBar width="100vw" />
        )}
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr min(120ch, 100%) 1fr",
          }}
        >
          <Card columnStart="2" marginBottom="128px">
            <HomePageCardLayoutCollection />
          </Card>
          <ActionHeroLayout />
        </Grid>
        {isMobile ? (
          <LearnFooterMobile width="100vw" />
        ) : (
          <LearnFooter width="100vw" />
        )}
      </ThemeProvider>
    </>
  );
};

export default Home;
