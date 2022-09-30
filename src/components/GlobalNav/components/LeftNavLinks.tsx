import { View, Flex, Button } from "@aws-amplify/ui-react";
import { NavMenuLink } from "./NavMenuLink";
import styles from "../GlobalNav.module.scss";
import { NavMenuItem } from "../GlobalNav";

interface LeftNavLinksProps {
  leftLinks: NavMenuItem[];
  isCollapsed: boolean;
  currentSite: string;
  showSecondaryNav: boolean;
  setShowSecondaryNav: any;
}

export function LeftNavLinks({
  isCollapsed,
  leftLinks,
  currentSite,
  showSecondaryNav,
  setShowSecondaryNav,
}: LeftNavLinksProps) {
  return (
    <Flex
      className={`${styles["left-nav-links"]} ${
        isCollapsed ? styles["collapsed-menu"] : ""
      }`}
    >
      {leftLinks.map((link) => (
        <View className={styles["mobile-border"]} key={link.order}>
          {link.label === currentSite ? (
            <>
              <Button
                className={styles["secondary-nav-button"]}
                onClick={() => {
                  setShowSecondaryNav(!showSecondaryNav);
                }}
              >
                {link.label}
              </Button>
              <View className={styles["secondary-nav-link"]}>
                <NavMenuLink navMenuItem={link} currentMenuItem={currentSite} />
              </View>
            </>
          ) : (
            <NavMenuLink navMenuItem={link} currentMenuItem={currentSite} />
          )}
        </View>
      ))}
    </Flex>
  );
}
