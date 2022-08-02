import Head from "next/head";
import {
  Grid,
  ThemeProvider,
  useBreakpointValue,
  Flex,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { studioTheme } from "../../ui-components";
import { LearnFooter } from "../LearnFooter";
import { LearnNavBar } from "../LearnNavBar";
import { BreadcrumbLayout } from "../BreadcrumbLayout";

interface IMetaObject {
  title: string;
  description: string;
  url: string;
  author?: string;
}

export function Layout({
  children,
  metaObject,
  showBreadcrumb,
  breadcrumbCallback,
}: {
  children: any;
  metaObject?: IMetaObject;
  showBreadcrumb?: boolean;
  breadcrumbCallback?: (pathnameArray: string[], asPathArray: string[]) => any;
}) {
  const [isMobile, setIsMobile] = useState(false);

  const mobileBreakpointValue = useBreakpointValue({
    base: "mobile",
    small: "mobile",
    medium: "mobile",
    large: "default",
  });

  useEffect(() => {
    if (mobileBreakpointValue === "mobile") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobileBreakpointValue]);

  const meta = {
    title: metaObject?.title ?? "Learn Amplify",
    description:
      metaObject?.description ??
      "Learn Amplify - Learn how to use Amplify to develop and deploy cloud-powered mobile and web apps.",
    url: metaObject?.url ?? "https://learn.amplify.aws/",
    author: metaObject?.author ?? "",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta name="author" content={meta.author} />
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
        <Flex direction="column" minHeight="100%" gap="0px">
          <LearnNavBar isMobile={isMobile} />
          {showBreadcrumb && breadcrumbCallback && (
            <BreadcrumbLayout breadcrumbCallback={breadcrumbCallback} />
          )}
          <Grid
            backgroundColor="#FAFAFA"
            templateColumns={{
              base: "1fr",
              small: "1fr",
              medium: "1fr",
              large: "1fr min(130ch, 100%) 1fr",
            }}
            marginLeft={{
              base: "16px",
              small: "16px",
              medium: "64px",
            }}
            marginRight={{
              base: "16px",
              small: "16px",
              medium: "64px",
            }}
            marginTop={{
              base: "32px",
              small: "32px",
              medium: "64px",
            }}
            marginBottom={{
              base: "114px",
              small: "114px",
              medium: "118px",
              large: "143px",
            }}
            grow="1"
          >
            {children}
          </Grid>
          <LearnFooter isMobile={isMobile} />
        </Flex>
      </ThemeProvider>
    </>
  );
}
