import {
  AmplifyProvider,
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

export default function smalListing() {
  return (
    <View as="div">
      <Flex direction={"row"}>
        <Image alt="contributor image" />
        <Flex direction={"column"}>
          <Text>Jane Doe</Text>
          <Text>Developer Advocate</Text>
        </Flex>
      </Flex>
    </View>
  );
}
