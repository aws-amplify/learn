import { Flex, View, Text, Button } from "@aws-amplify/ui-react";
import { IconInfo } from "./IconInfo";
import styles from "./Banner.module.scss";

interface BannerProps {
  url?: string;
}

export const Banner: React.FC<BannerProps> = () => {
  return (
    <View className={styles["message-banner"]}>
      <Flex direction="column">
        <Flex direction="row" gap="xxs">
          <IconInfo />
          <Text className={styles["message-banner__content"]}>
            The courses on this site teach Amplify Gen 1. If you&apos;re
            creating a new app, we recommend using Gen 2 which has enhanced
            capabilities.
          </Text>
        </Flex>
        <View>
          <Button
            as="a"
            href="https://docs.amplify.aws/"
            size="small"
            gap="small"
            target="_blank"
            colorTheme="overlay"
            rel="noopener noreferrer"
            className="message-banner__button"
          >
            Get started with Gen 2
          </Button>
        </View>
      </Flex>
    </View>
  );
};
