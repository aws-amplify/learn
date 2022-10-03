import { Button, Flex } from "@aws-amplify/ui-react";
import { AmplifyNavLink } from "./AmplifyNavLink";
import { ChevronIcon } from "./icons";
import styles from "../GlobalNav.module.scss";
import { Dispatch, SetStateAction } from "react";

interface SecondaryNavProps {
  currentSite: string;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  showSecondaryNav: boolean;
  setShowSecondaryNav: Dispatch<SetStateAction<boolean>>;
  secondaryNavMobile: JSX.Element;
}

// TODO: Refactor this so there isn't so much duplicate code here and inside GlobalNav.tsx
export function SecondaryNav({
  currentSite,
  isCollapsed,
  setIsCollapsed,
  showSecondaryNav,
  setShowSecondaryNav,
  secondaryNavMobile,
}: SecondaryNavProps) {
  return (
    <Flex
      style={{ display: showSecondaryNav ? "flex" : "none" }}
      className={styles["nav-links-container"]}
    >
      <Flex height="100%" id="left-nav" className={styles["left-nav-links"]}>
        <AmplifyNavLink
          currentSite={currentSite}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Flex
          direction="column"
          gap="0px"
          className={`${styles["mobile-secondary-nav"]} ${
            isCollapsed ? styles["collapsed-menu"] : ""
          }`}
        >
          <Button
            onClick={() => {
              setShowSecondaryNav(false);
            }}
            className={styles["secondary-nav-button"]}
            ariaLabel={`Back to all Amplify sites`}
          >
            <ChevronIcon rotateDeg="90" />
            All Amplify sites
          </Button>
          {secondaryNavMobile}
        </Flex>
      </Flex>
    </Flex>
  );
}
