import { Flex } from "@aws-amplify/ui-react";
import { forwardRef, useState } from "react";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";
import styles from "./LearnNavBar.module.scss";

export const NavBarMenuItem = forwardRef(
  (
    {
      children,
      href,
      showExternalIcon = false,
      onMobile = false
    }: {
      children: any;
      href?: string;
      showExternalIcon?: boolean;
      onMobile?: boolean;
    },
    ref
  ) => {
    // Colors for changing "ExternalIcon"
    const hoverColor = "rgba(35,47,62,1)";
    const defaultColor = "rgba(84,91,100,1)";
    const [isHoverColor, setIsHoverColor] = useState(defaultColor);

    return (
      <a
        className={styles["navbar-menu-item"]}
        href={href}
        {...(showExternalIcon
          ? { rel: "noopener noreferrer", target: "_blank" }
          : {})}
      >
        <Flex
          alignItems="center"
          onMouseEnter={() => {
            if (showExternalIcon) {
              setIsHoverColor(hoverColor);
            }
          }}
          onMouseLeave={() => {
            if (showExternalIcon) {
              setIsHoverColor(defaultColor);
            }
          }}
          justifyContent={onMobile ? "space-between" : ''}
        >
          {children}
          <ExternalIconCustom
            width="24px"
            height="30px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            color={isHoverColor}
            display={showExternalIcon ? "" : "none"}
          />
        </Flex>
      </a>
    );
  }
);
NavBarMenuItem.displayName = "NavBarMenuItem";
