import React from "react";
import {
  Divider,
  Flex,
  Image,
  Text,
  View,
  Card,
  FlexProps,
} from "@aws-amplify/ui-react";
import styles from "./CardLayout.module.scss";
import { TagButton } from "../TagButton";
import { capitalizeEnum, createCourseTitleUri } from "../../utils";
import Link from "next/link";
import { Course, Tag } from "../../models";

export declare type CardLayoutProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    course: Course;
  } & {
    tags: Tag[];
  } & {
    isOnHomePage?: boolean;
  } & {
    isActive?: "false" | "true";
    isHover?: "false" | "true";
  }
>;

export function CardLayout({
  course,
  tags,
  isOnHomePage,
  ...rest
}: CardLayoutProps) {
  const cardLayout = (
    <Flex
      gap="24px"
      direction="column"
      width="340px"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      className={styles["course-card"]}
      {...rest}
    >
      <Link
        href={{
          pathname: "/learn/courses/[courseurltitle]",
        }}
        as={`/learn/courses/${createCourseTitleUri(
          course.courseUrlTitle,
          course.id
        )}`}
      >
        <a style={{ textDecoration: "none" }} className={styles["course-card"]}>
          <Flex gap="24px" direction="column">
            <View
              height="240px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Image
                position="absolute"
                top="0px"
                bottom="0px"
                height="100%"
                left="0px"
                right="0px"
                width="calc(100% - 0px)"
                objectFit="cover"
                transformOrigin="top left"
                transform="rotate(0deg)"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                overflow="hidden"
                src={course?.image}
                alt={course?.imageAltText || ""}
              ></Image>
            </View>
            <Flex
              gap="12px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Flex
                gap="12px"
                direction="row"
                wrap="wrap"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
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
                  letterSpacing="1.13px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="COURSE"
                ></Text>
                <Divider
                  height="24px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  size="small"
                  orientation="vertical"
                ></Divider>
                <Text
                  fontFamily="Amazon Ember"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(35,47,62,1)"
                  lineHeight="24px"
                  textAlign="right"
                  display="flex"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={capitalizeEnum(course?.skillLevel)}
                ></Text>
                <Divider
                  height="24px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  size="small"
                  orientation="vertical"
                ></Divider>
                <Text
                  fontFamily="Amazon Ember"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(35,47,62,1)"
                  lineHeight="24px"
                  textAlign="right"
                  display="flex"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${course?.timeHours}${"h "}${
                    course?.timeMinutes
                  }${"m"}`}
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
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={course?.title}
                className={styles["course-title"]}
              ></Text>
              <Text
                fontFamily="Amazon Ember"
                fontSize="16px"
                fontWeight="400"
                color="rgba(84,91,100,1)"
                lineHeight="24px"
                textAlign="left"
                display={isOnHomePage ? "flex" : "none"}
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={course?.description}
              ></Text>
            </Flex>
          </Flex>
        </a>
      </Link>
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
      >
        {tags.map((tag) => (
          <TagButton key={tag.id} tag={tag} inCourseLayout={true} />
        ))}
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
