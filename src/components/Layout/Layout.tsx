import { Grid, ThemeProvider, useBreakpointValue } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import {
  LearnFooter,
  LearnFooterMobile,
  NavBar,
  NavBarMobileCollapsed,
  studioTheme,
} from "../../ui-components";

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

  return (
    <>
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
          {children}
        </Grid>
        {isMobile ? (
          <LearnFooterMobile width="100vw" />
        ) : (
          <LearnFooter width="100vw" />
        )}
      </ThemeProvider>
    </>
  );
}
