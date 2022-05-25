import { Card, Text } from "@aws-amplify/ui-react";

export default function dataCard({ title, data }) {
  return (
    <Card
      backgroundColor={"#F2F3F3"}
      border={"1px solid #A9B6B7"}
      textAlign="center"
      marginBottom={8}
    >
      <Text
        color={"#879697"}
        fontSize="14px"
        lineHeight={"24px"}
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Text color={"#545B64"} fontSize={"20px"}>
        {data}
      </Text>
    </Card>
  );
}
