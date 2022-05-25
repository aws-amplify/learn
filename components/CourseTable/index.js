import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  Link,
  useTheme,
} from "@aws-amplify/ui-react";

export default function CourseTable({ chapters }) {
  return (
    <View
      as="div"
      backgroundColor="#fff"
      borderRadius="8px"
      border="1px solid #A9B6B7"
      marginTop="32px"
    >
      {chapters.map(({ title, lessons }, idx) => {
        return (
          <View as="div" key={idx}>
            <Heading
              level={7}
              fontSize="14px"
              lineHeight="24px"
              color="#545B64"
              textTransform="uppercase"
              marginTop="12px"
              marginBottom="12px"
              marginLeft="20px"
              borderBottom="1px solid"
            >
              {title}
            </Heading>
            {lessons.map((lesson, idx) => {
              return (
                <View
                  as="div"
                  key={idx}
                  marginTop="12px"
                  marginBottom="12px"
                  marginLeft="20px"
                >
                  <Image
                    src="/icons/blue-play.svg"
                    alt="play button"
                    marginRight="13.6px"
                  />
                  <Link href="#" color={"#0074BD"}>
                    {lesson}
                  </Link>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
