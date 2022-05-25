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
  Divider,
} from "@aws-amplify/ui-react";

const statsRow = ({ newCourse }) => {
  return (
    <Flex marginBottom={8}>
      <Text fontWeight={700}>{newCourse ? "NEW COURSE" : "COURSE"}</Text>
      <Divider orientation="vertical" />
      <div>Advanced</div>
      <Divider orientation="vertical" />
      <div>2h 19m</div>
    </Flex>
  );
};

export default statsRow;
