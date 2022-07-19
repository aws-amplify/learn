/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

const COURSE_TITLE_ID_LENGTH = 5;

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Image, Text, View, Card } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { CourseTag } from "../../models";
import styles from "./CardLayout.module.scss";
import { TagButton } from "../TagButton";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";
import { useRouter } from "next/router";
import { capitalizeEnum } from "../../utils/transformEnumsFromAmplify";

export function CardLayout(props) {
  const { course, isOnHomePage, overrides: overridesProp, ...rest } = props;
  const [tags, setTags] = React.useState([]);
  const router = useRouter();

  async function getCourseTags() {
    const courseTags = await DataStore.query(CourseTag);

    const result = courseTags.filter((e) => e.course.id === course.id);

    setTags(result.map((e) => e.tag));
  }

  const callback = React.useCallback(getCourseTags, []);

  useFirstDatastoreQuery(callback);

  React.useEffect(() => {
    getCourseTags();
  }, []);

  const navigateToCourse = () => {
    // Use the course title with the first 5 characters of the course id as the coursetitle
    const coursetitle = `${course.title.replaceAll(
      " ",
      "-"
    )}-${course.id.substring(0, COURSE_TITLE_ID_LENGTH)}`;

    router.push(
      {
        pathname: "/courses/[coursetitle]",
        query: { id: course.id },
      },
      `/courses/${coursetitle}`
    );
  };

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
      className={styles["course-card"]}
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          navigateToCourse();
        }
      }}
      onClick={(event) => {
        // Since tag buttons are inside this container, prevent
        // navigating to course when a tag button is clicked
        if (event.target.tagName !== "A") {
          navigateToCourse();
        }
      }}
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
          wrap="wrap"
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
            children={capitalizeEnum(course?.skillLevel)}
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
          className={styles["course-title"]}
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
          display={isOnHomePage ? "flex" : "none"}
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
          wrap="wrap"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="8px 0px 0px 0px"
          ariaLabel="Courses hash tags"
          {...getOverrideProps(overrides, "Frame 58")}
        >
          {tags.map((tag) => (
            <TagButton key={tag.id} tag={tag} inCourseLayout={true} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

  if (isOnHomePage) {
    return (
      <Card
        className={styles["home-page-card"]}
        variation="elevated"
        borderRadius="16px"
      >
        {cardLayout}
      </Card>
    );
  } else {
    return cardLayout;
  }
}
