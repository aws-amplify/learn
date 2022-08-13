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

export function Layout({
  children,
  showBreadcrumb,
  breadcrumbCallback,
}: {
  children: any;
  showBreadcrumb?: boolean;
  breadcrumbCallback?: (pathnameArray: string[], asPathArray: string[]) => any;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

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

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={studioTheme}>
      <Flex direction="column" minHeight="100%" gap="0px">
        <LearnNavBar isMobile={isMobile} />
        {showBreadcrumb && breadcrumbCallback && (
          <BreadcrumbLayout breadcrumbCallback={breadcrumbCallback} />
        )}
        <Grid
          as="main"
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr min(152ch, 100%) 1fr",
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
  );
}
