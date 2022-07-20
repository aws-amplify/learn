import { useRouter } from "next/router";
import {
  Button,
  Card,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { Lesson, Course } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import { LessonLayout } from "../LessonLayout";
import { LessonTableOfContents } from "../LessonTableOfContents";
import { capitalizeEnum } from "../../utils/capitalizeEnum";
import { useState } from "react";
import { YoutubeModal } from "../YoutubeModal";

export function CourseOverview({
  course,
  lessons,
}: {
  course: Course;
  lessons: Lesson[];
}) {
  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const heroLayoutVariant = useBreakpointValue({
    base: "mobile",
    small: "mobile ",
    medium: "default",
    large: "default",
  }) as "mobile" | "default";

  const buttonGroup = (
    <>
      <Button
        isFullWidth={true}
        variation="primary"
        onClick={() => {
          router.push(
            {
              pathname: `${router.pathname}/lessons/[lesson]`,
              query: { courseId: course.id },
            },
            `${router.asPath}/lessons/1`
          );
        }}
      >
        Start course
      </Button>
      <Button
        isFullWidth={true}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Watch trailer
      </Button>
    </>
  );

  return (
    <LessonLayout
      course={course}
      mainChildren={
        <>
          <Flex direction="column" gap="32px">
            <HeroLayout
              variation={heroLayoutVariant}
              course={course}
              shrink="10"
              overrides={{
                "NEW COURSE": {
                  children: "COURSE",
                },
                Divider33082631: {
                  display: "none",
                },
                Advanced: {
                  display: "none",
                },
                Divider33082633: {
                  display: "none",
                },
                "2h 36m": {
                  display: "none",
                },
                "Frame 16": {
                  width: "auto",
                },
                Button31473054: {
                  display: "none",
                },
                Button31473055: {
                  display: "none",
                },
              }}
            />
            <Flex
              display={{
                base: "flex",
                small: "flex",
                medium: "flex",
                large: "none",
              }}
              direction={{
                base: "column",
                small: "column",
                medium: "row",
                large: "column",
                xl: "column",
              }}
            >
              {buttonGroup}
            </Flex>
            <Flex justifyContent="center">
              <Image
                src={course?.image || ""}
                alt={course?.imageAltText || ""}
                borderRadius="8px"
              />
            </Flex>
          </Flex>
          <Flex
            direction={{
              base: "column",
              small: "column",
              medium: "row",
            }}
            columnStart={1}
            marginTop="32px"
          >
            <Card
              variation="outlined"
              border="1px solid #A9B6B7"
              borderRadius="8px"
              backgroundColor="#F2F3F3"
              width="100%"
            >
              <Flex direction="column" alignItems="center">
                <Text
                  fontFamily="Amazon Ember Display"
                  fontSize="0.875rem"
                  color="#545B64"
                >
                  SKILL LEVEL
                </Text>
                <Text
                  fontFamily="Amazon Ember Display"
                  fontSize="16px"
                  fontWeight="400"
                  color="#232F3E"
                  lineHeight="24px"
                  display="flex"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                >
                  {capitalizeEnum(course?.skillLevel)}
                </Text>
              </Flex>
            </Card>
            <Card
              variation="outlined"
              border="1px solid #A9B6B7"
              borderRadius="8px"
              backgroundColor="#F2F3F3"
              width="100%"
            >
              <Flex direction="column" alignItems="center">
                <Text
                  fontFamily="Amazon Ember Display"
                  fontSize="0.875rem"
                  color="#545B64"
                  whiteSpace="nowrap"
                >
                  TIME TO COMPLETE
                </Text>
                <Text
                  fontFamily="Amazon Ember Display"
                  fontSize="16px"
                  fontWeight="400"
                  color="#232F3E"
                  lineHeight="24px"
                  display="flex"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                >{`${course?.timeHours}${"h "}${
                  course?.timeMinutes
                }${"m"}`}</Text>
              </Flex>
            </Card>
          </Flex>
          <View as="div" columnStart={1} marginTop="32px">
            <LessonTableOfContents courseId={course.id} lessons={lessons} />
          </View>
          {course.trailerEmbedId && (
            <YoutubeModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              courseTitle={course.title}
              courseTrailerEmbedId={course.trailerEmbedId}
            />
          )}
          <Flex
            columnStart={1}
            direction="column"
            marginTop="64px"
            marginBottom="64px"
          >
            <Text
              fontFamily="Amazon Ember Display"
              fontStyle="normal"
              fontWeight="100"
              fontSize="2rem"
              color="#232F3E"
            >
              {`What you'll learn`}
            </Text>
            <Text
              fontFamily="Amazon Ember"
              whiteSpace="pre-line"
              color="#545B64"
            >
              {course.learningObjective}
            </Text>
          </Flex>
          <Flex columnStart={1} direction="column">
            <Text
              fontFamily="Amazon Ember Display"
              fontStyle="normal"
              fontWeight="400"
              fontSize="1.25rem"
              color="#232F3E"
            >
              Requirements
            </Text>
            <ul>
              {course.requirements?.map((requirement, index) => {
                return (
                  <li key={index}>
                    <Text
                      fontFamily="Amazon Ember"
                      whiteSpace="pre-line"
                      color="#545B64"
                    >
                      {requirement}
                    </Text>
                  </li>
                );
              })}
            </ul>
          </Flex>
        </>
      }
      sidebarChildren={buttonGroup}
    />
  );
}
