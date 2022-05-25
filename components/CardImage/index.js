import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from "@aws-amplify/ui-react";

import styles from "./styles.module.css";

function cardImage() {
  return (
    <Image
      borderRadius={8}
      className={styles.image}
      marginBottom={24}
      alt="image"
      src="/mock-image.png"
    />
  );
}

export default cardImage;
