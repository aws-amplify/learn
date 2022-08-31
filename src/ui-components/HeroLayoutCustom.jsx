import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { TagButton } from "../components/TagButton";
import { createCourseTitleUri } from "../utils";
import Link from "next/link";

export default function HeroLayout(props) {
  const { course, tags, overrides: overridesProp, ...rest } = props;

  const variants = [
    {
      overrides: {
        "NEW COURSE": {},
        Divider33082631: {},
        Advanced: {},
        Divider33082633: {},
        "2h 36m": {},
        "Frame 389": {},
        "Build fullstack mobile applications with Amplify": {},
        Button31473050: {},
        Button31473051: {},
        "Frame 57": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.":
          {},
        Button31473054: {},
        Button31473055: {},
        "Frame 16": {},
        HeroLayout: {},
      },
      variantValues: { variation: "default" },
    },
    {
      overrides: {
        "NEW COURSE": {},
        Divider33082631: {},
        Advanced: {},
        Divider33082633: {},
        "2h 36m": {},
        "Frame 389": {},
        "Build fullstack mobile applications with Amplify": {
          fontFamily: "Amazon Ember Display",
          fontSize: "32px",
          lineHeight: "40px",
        },
        Button31473050: {},
        Button31473051: {},
        "Frame 57": { padding: "4px 0px 0px 0px" },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.":
          {},
        Button31473054: { alignSelf: "stretch", objectFit: "cover" },
        Button31473055: { alignSelf: "stretch", objectFit: "cover" },
        "Frame 16": {
          direction: "column",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        HeroLayout: {},
      },
      variantValues: { variation: "mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout")}
    >
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        wrap="wrap"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 389")}
      >
        <Text
          fontFamily="Amazon Ember Display"
          fontSize="16px"
          fontWeight="700"
          color="rgba(35,47,62,1)"
          textTransform="uppercase"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.13px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NEW COURSE"
          {...getOverrideProps(overrides, "NEW COURSE")}
        ></Text>
        <Divider
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider33082631")}
        ></Divider>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="400"
          color="rgba(35,47,62,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={course?.skillLevel}
          {...getOverrideProps(overrides, "Advanced")}
        ></Text>
        <Divider
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider33082633")}
        ></Divider>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="400"
          color="rgba(35,47,62,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${course?.timeHours}${"h "}${course?.timeMinutes}${"m"}`}
          {...getOverrideProps(overrides, "2h 36m")}
        ></Text>
      </Flex>
      <Heading
        level={1}
        fontFamily="Amazon Ember"
        fontSize="48px"
        fontWeight="300"
        color="rgba(35,47,62,1)"
        lineHeight="56px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={course?.title}
        {...getOverrideProps(
          overrides,
          "Build fullstack mobile applications with Amplify"
        )}
      ></Heading>
      <Flex
        gap="8px"
        direction="row"
        wrap="wrap"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 0px 0px 0px"
        ariaLabel="Courses hash tags"
        {...getOverrideProps(overrides, "Frame 57")}
      >
        {tags.map((tag) => (
          <TagButton key={tag.id} tag={tag} inCourseLayout={true} />
        ))}
      </Flex>
      <Text
        fontFamily="Amazon Ember"
        fontSize="16px"
        fontWeight="400"
        color="rgba(84,91,100,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={course?.description}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."
        )}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 16")}
      >
        <View {...getOverrideProps(overrides, "Button31473054")}>
          <Link
            href={{
              pathname: "/learn/courses/[coursetitle]",
            }}
            as={`/learn/courses/${createCourseTitleUri(
              course.title,
              course.id
            )}`}
          >
            <a className="link-button">
              <View
                className="amplify-button amplify-button--primary"
                height="40px"
                width={{
                  base: "100%",
                  small: "100%",
                  medium: "auto",
                }}
              >
                Explore course
              </View>
            </a>
          </Link>
        </View>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(169,182,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          ariaLabel={`Watch trailer for course ${course.title}`}
          {...getOverrideProps(overrides, "Button31473055")}
        >
          Watch trailer
        </Button>
      </Flex>
    </Flex>
  );
}
