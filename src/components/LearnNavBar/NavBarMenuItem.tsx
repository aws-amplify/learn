import { Flex } from "@aws-amplify/ui-react";
import { useState } from "react";
import ExternalIconCustom from "../../ui-components/ExternalIconCustom";
import { trackExternalLink } from "../../utils/track";
import styles from "./LearnNavBar.module.scss";

export function NavBarMenuItem({
  children,
  href,
  onMobile = false,
}: {
  children: any;
  href: string;
  onMobile?: boolean;
}) {
  // Colors for changing "ExternalIcon"
  const hoverColor = "rgba(35,47,62,1)";
  const defaultColor = "rgba(84,91,100,1)";
  const [isHoverColor, setIsHoverColor] = useState(defaultColor);

  return (
    <a
      className={styles["navbar-menu-item"]}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => {
        trackExternalLink(href);
      }}
    >
      <Flex
        alignItems="center"
        onMouseEnter={() => {
          setIsHoverColor(hoverColor);
        }}
        onMouseLeave={() => {
          setIsHoverColor(defaultColor);
        }}
        justifyContent={onMobile ? "space-between" : ""}
      >
        {children}
        <ExternalIconCustom
          width="24px"
          height="30px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          color={isHoverColor}
        />
      </Flex>
    </a>
  );
}
