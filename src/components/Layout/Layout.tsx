import { Grid, ThemeProvider, useBreakpointValue } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import {
  studioTheme,
} from "../../ui-components";
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

  return (
    <>
      <ThemeProvider theme={studioTheme}>
        <LearnNavBar isMobile={isMobile} />
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr min(120ch, 100%) 1fr",
          }}
          // templateColumns={{
          //   base: "1fr",
          //   small: "1fr",
          //   medium: "64px 1fr 64px",
          //   large: "128px 1fr 128px",
          // }}
        >
          {children}
        </Grid>
        <LearnFooter isMobile={isMobile} />
      </ThemeProvider>
    </>
  );
}
