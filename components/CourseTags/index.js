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

function tagsRow({ tags }) {
  return (
    <Flex>
      {tags.map((tag, idx) => {
        console.log(tag);
        return (
          <Button
            backgroundColor={"#fff"}
            color={"#0074BD"}
            fontWeight={500}
            border={"1px solid #A9B6B7"}
            borderRadius={4}
            key={idx}
          >
            {tag}
          </Button>
        );
      })}
    </Flex>
  );
}

export default tagsRow;
