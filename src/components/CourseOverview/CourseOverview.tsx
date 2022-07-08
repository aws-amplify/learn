import { useRouter } from "next/router";
import {
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { Contributor, Course } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { CourseContributors } from "../CourseContributors";
import { ShareThis } from "../ShareThis";
import styles from "./CourseOverview.module.scss";

export function CourseOverview({
  course,
  contributors,
}: {
  course: Course;
  contributors: Contributor[];
}) {
  const router = useRouter();

  const contributorsInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

  const heroLayoutVariant = useBreakpointValue({
    base: "mobile",
    small: "mobile ",
    medium: "default",
    large: "default",
  }) as "mobile" | "default";

  const sectionButtonClassNames = useBreakpointValue({
    base: styles["stretch-button"],
    small: styles["stretch-button"],
    medium: styles["flex-end-button"],
  });

  return (
    <Grid
      columnStart={2}
      columnGap="60px"
      templateColumns={{
        base: "1fr",
        small: "1fr",
        medium: "1fr",
        large: "70% 1fr",
      }}
    >
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
          <Button isFullWidth={true} variation="primary">
            Start course
          </Button>
          <Button isFullWidth={true}>Watch trailer</Button>
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
        display={{
          base: "none",
          small: "none",
          medium: "none",
          large: "flex",
        }}
        direction={{
          base: "column",
          small: "column",
          medium: "row",
          large: "column",
          xl: "column",
        }}
      >
        <Button isFullWidth={true} variation="primary">
          Start course
        </Button>
        <Button isFullWidth={true}>Watch trailer</Button>
        {contributorsInSidebarBreakpoint && (
          <>
            <View marginTop="40px">
              <CourseContributors contributors={contributors} />
            </View>
            <View marginTop="40px">
              <ShareThis />
            </View>
          </>
        )}
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
              color="#879697"
            >
              SKILL LEVEL
            </Text>
            <Text
              fontFamily="Amazon Ember Display"
              fontSize="16px"
              fontWeight="400"
              color="#545B64"
              lineHeight="24px"
              display="flex"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
            >
              {course?.skillLevel}
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
              color="#879697"
              whiteSpace="nowrap"
            >
              TIME TO COMPLETE
            </Text>
            <Text
              fontFamily="Amazon Ember Display"
              fontSize="16px"
              fontWeight="400"
              color="#545B64"
              lineHeight="24px"
              display="flex"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
            >{`${course?.timeHours}${"h "}${course?.timeMinutes}${"m"}`}</Text>
          </Flex>
        </Card>
      </Flex>
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
        <Text fontFamily="Amazon Ember" whiteSpace="pre-line" color="#545B64">
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
      {!contributorsInSidebarBreakpoint && (
        <Flex direction="column" columnStart={1}>
          <View marginTop="64px">
            <CourseContributors contributors={contributors} />{" "}
          </View>
          <View marginTop="64px">
            <ShareThis />
          </View>
        </Flex>
      )}
      <Grid
        marginTop={{
          base: "64px",
          small: "64px",
          medium: "64px",
          large: "64px",
          xl: "128px",
        }}
        templateRows={{
          small: "auto",
          medium: "auto 1fr",
        }}
        templateColumns={{
          base: "1fr",
          small: "1fr",
          medium: "1fr 1fr",
        }}
        rowGap="32px"
        columnStart={1}
        columnEnd={{
          base: 1,
          small: 1,
          medium: 1,
          large: -1,
          xl: -1,
        }}
      >
        <Text
          fontFamily="'Amazon Ember Display'"
          fontWeight="100"
          fontSize="2rem"
        >
          More Courses
        </Text>
        <View
          as="div"
          order={{
            base: 1,
            small: 1,
            medium: 0,
          }}
          alignSelf="center"
          className={sectionButtonClassNames}
        >
          <Button
            aria-label="All Courses"
            width="100%"
            onClick={() => {
              router.push("/courses");
            }}
          >
            All courses
          </Button>
        </View>
        <View as="div" columnStart={1} columnEnd={-1}>
          <CardLayoutCollection
            type="grid"
            templateColumns={{
              base: "1fr",
              small: "1fr",
              medium: "1fr 1fr",
              large: "1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
            gap="64px 20px"
            limit={
              useBreakpointValue({
                base: 1,
                small: 1,
                medium: 2,
                large: 2,
                xl: 3,
              }) as number
            }
            filter={(e: Course) => e.id !== course.id}
          />
        </View>
      </Grid>
    </Grid>
  );
}
