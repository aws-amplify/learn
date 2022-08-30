import { Button, Flex, View } from "@aws-amplify/ui-react";
import { LearnLogo } from "../../../ui-components";
import ExternalIconCustom from "../../../ui-components/ExternalIconCustom";
import styles from "../LearnNavBar.module.scss";
import Link from "next/link";
import { NavBarMenuItem } from "../NavBarMenuItem";
import { trackExternalLink } from "../../../utils/track";

export function LearnNavBarDesktop() {
  return (
    <Flex
      gap="32px"
      direction="row"
      width="100vw"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.03999999910593033)"
      padding="0px 32px 0px 32px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="40px"
        direction="row"
        width="454px"
        alignItems="center"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <View
          width="157px"
          height="22px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Link href="/learn">
            <a>
              <LearnLogo
                className={styles["learn-logo"]}
                display="flex"
                gap="8px"
                position="absolute"
                top="calc(50% - 11px - 0px)"
                left="0px"
                direction="row"
                alignItems="flex-start"
                padding="0px 0px 0px 0px"
              ></LearnLogo>
            </a>
          </Link>
        </View>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          height="30px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Link href="/learn/courses">
            <a className={styles["navbar-menu-item"]}>Courses</a>
          </Link>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          height="30px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Link href="/learn/about">
            <a className={styles["navbar-menu-item"]}>About</a>
          </Link>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          height="30px"
          alignItems="center"
          grow="1"
          basis="74px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <NavBarMenuItem href="https://docs.amplify.aws/">Docs</NavBarMenuItem>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Button
          display="flex"
          gap="10px"
          direction="row"
          width="163px"
          height="42px"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(169,182,183,1)"
          borderRadius="5px"
          padding="5px 16px 5px 16px"
          isDisabled={false}
          onClick={() => {
            trackExternalLink("https://docs.amplify.aws/start/");
            window.open(
              "https://docs.amplify.aws/start/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Try Amplify
          <ExternalIconCustom />
        </Button>
      </Flex>
    </Flex>
  );
}
