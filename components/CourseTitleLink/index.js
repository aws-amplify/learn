import { Text } from "@aws-amplify/ui-react";

const CourseTitleLink = ({ link, children }) => (
  <a href={link}>
    <Text color="#0074BD">{children}</Text>
  </a>
);

export default CourseTitleLink;
