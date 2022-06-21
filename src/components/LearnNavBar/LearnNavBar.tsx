import { useState } from "react";
import {
  NavBar,
  NavBarMobileCollapsed,
  NavBarMobileExpanded,
} from "../../ui-components";

export function LearnNavBar({ isMobile }: { isMobile: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isMobile) {
    return !isExpanded ? (
      <NavBarMobileCollapsed
        width="100vw"
        overrides={{
          "Frame 396": { gap: "0" },
          MenuIcon: {
            // @ts-ignore
            onClick: () => {
              setIsExpanded(!isExpanded);
            },
          },
        }}
      />
    ) : (
      <NavBarMobileExpanded
        width="100vw"
        overrides={{
          "Frame 396": { gap: "0" },
          CloseIcon: {
            // @ts-ignore
            onClick: () => {
              setIsExpanded(!isExpanded);
            },
          },
          "LearnMenuItem31472989": {
            // @ts-ignore
            overrides: {
              Menu: { children: "Courses" },
              "Button Icon": {
                display: "none",
              },
            }
          },
          "LearnMenuItem31472992": {
            // @ts-ignore
            overrides: {
              Menu: { children: "About" },
              "Button Icon": {
                display: "none",
              },
            }
          },
          "LearnMenuItem31472995": {
            // @ts-ignore
            overrides: {
              Menu: { children: "Docs" },
              onClick: () => {
                console.log('just clicked docs site');
              }
            }
          },
        }}
      />
    );
  } else {
    return (
      <NavBar
        width="100vw"
        overrides={{
          LearnMenuItem31473021: {
            // @ts-ignore
            overrides: {
              Menu: { children: "Courses" },
              "Button Icon": {
                display: "none",
              },
            },
          },
          LearnMenuItem31473022: {
            // @ts-ignore
            overrides: {
              Menu: { children: "About" },
              "Button Icon": {
                display: "none",
              },
            },
          },
          LearnMenuItem31473023: {
            // @ts-ignore
            overrides: {
              Menu: { children: "Docs" },
            },
          },
        }}
      />
    );
  }
}
