/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  View,
  Card,
} from "@aws-amplify/ui-react";

import { DataStore } from "aws-amplify";
import { CourseTag } from "../models";

export default function CardLayout(props) {
  const { course, isOnHomePage, overrides: overridesProp, ...rest } = props;

  const [tags, setTags] = React.useState([]);

  async function getCourseTags() {
    console.log("course id: ", course.id);
    const courseTags = await DataStore.query(CourseTag);

    console.log("coursetags: ", courseTags);

    const tags = courseTags.filter((e) => e.course.id === course.id);

    console.log("tags: ", tags);
    setTags(tags);
  }

  React.useEffect(() => {
    getCourseTags();
  }, []);

  const variants = [
    {
      overrides: {
        "mohammad-rahmani-xV1peKnrlMY-unsplash 1": {},
        "Frame 395": {},
        COURSE: {},
        Divider33082635: {},
        Advanced: {},
        Divider33082637: {},
        "2h 36m": {},
        "Frame 389": {},
        "Build fullstack mobile applications with Amplify": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.":
          {},
        Button31473172: {},
        Button31473173: {},
        "Frame 58": {},
        "Frame 118": {},
        CardLayout: {},
      },
      variantValues: { isHover: "false", isActive: "false" },
    },
    {
      overrides: {
        "mohammad-rahmani-xV1peKnrlMY-unsplash 1": {},
        "Frame 395": {},
        COURSE: {},
        Divider33082635: {},
        Advanced: {},
        Divider33082637: {},
        "2h 36m": {},
        "Frame 389": {},
        "Build fullstack mobile applications with Amplify": {
          color: "rgba(233,94,7,1)",
        },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.":
          {},
        Button31473172: {},
        Button31473173: {},
        "Frame 58": {},
        "Frame 118": {},
        CardLayout: {},
      },
      variantValues: { isHover: "true", isActive: "false" },
    },
    {
      overrides: {
        "mohammad-rahmani-xV1peKnrlMY-unsplash 1": {},
        "Frame 395": {},
        COURSE: {},
        Divider33082635: {},
        Advanced: {},
        Divider33082637: {},
        "2h 36m": {},
        "Frame 389": {},
        "Build fullstack mobile applications with Amplify": {
          color: "rgba(218,107,16,1)",
        },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada.":
          {},
        Button31473172: {},
        Button31473173: {},
        "Frame 58": {},
        "Frame 118": {},
        CardLayout: {},
      },
      variantValues: { isHover: "false", isActive: "true" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );

  const cardLayout = (
    <Flex
      gap="24px"
      direction="column"
      width="340px"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      className="course-card"
      {...rest}
      {...getOverrideProps(overrides, "CardLayout")}
    >
      <View
        height="240px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 395")}
      >
        <Image
          position="absolute"
          top="0px"
          bottom="0px"
          height="100%"
          left="0px"
          right="0px"
          width="calc(100% - 0px)"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          src={course?.image}
          alt={course?.imageAltText}
          {...getOverrideProps(
            overrides,
            "mohammad-rahmani-xV1peKnrlMY-unsplash 1"
          )}
        ></Image>
      </View>
      <Flex
        gap="12px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 118")}
      >
        <Flex
          gap="12px"
          direction="row"
          alignItems="flex-start"
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
            children="COURSE"
            {...getOverrideProps(overrides, "COURSE")}
          ></Text>
          <Divider
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="vertical"
            {...getOverrideProps(overrides, "Divider33082635")}
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
            {...getOverrideProps(overrides, "Divider33082637")}
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
        <Text
          fontFamily="Amazon Ember Display"
          fontSize="24px"
          fontWeight="500"
          color="rgba(0,116,189,1)"
          lineHeight="32px"
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
        ></Text>
        <Text
          fontFamily="Amazon Ember"
          fontSize="16px"
          fontWeight="400"
          color="rgba(84,91,100,1)"
          lineHeight="24px"
          textAlign="left"
          display={isOnHomePage ? 'flex' : 'none'}
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
          courseTags={course?.courseTags}
          {...getOverrideProps(overrides, "Frame 58")}
        >
          {tags.map((courseTag) => {
            return (
              <Button
                key={courseTag.id}
                className="tag-button"
                display="flex"
                gap="0"
                direction="row"
                width="fit-content"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                height="33px"
                position="relative"
                size="small"
                isDisabled={false}
                variation="link"
                {...getOverrideProps(overrides, "Button31473050")}
              >
                #{courseTag.tag.name}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );

  if (isOnHomePage) {
    return <Card variation="elevated" borderRadius="16px">{cardLayout}</Card>;
  } else {
    return cardLayout;
  }
}
