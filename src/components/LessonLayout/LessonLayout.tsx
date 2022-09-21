import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Grid,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { Contributor, Course } from "../../models";
import { CardLayoutCollection } from "../../components/CardLayoutCollection";
import { CourseContributors } from "../CourseContributors";
import { ShareThis } from "../ShareThis";
import styles from "./LessonLayout.module.scss";
import ArrowRightIconCustom from "../../ui-components/ArrowRightIconCustom";
import { CardLayoutData } from "../../types/models";

export function LessonLayout({
  course,
  contributors,
  cardLayoutData,
  mainChildren,
  sidebarChildren,
}: {
  course: Course;
  contributors: Contributor[];
  cardLayoutData: CardLayoutData[];
  mainChildren: any;
  sidebarChildren: any;
}) {
  const router = useRouter();

  const showInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

  const sectionButtonClassNames = useBreakpointValue({
    base: styles["stretch-button"],
    small: styles["stretch-button"],
    medium: styles["flex-end-button"],
  });

  return (
    <Grid
      columnStart={{
        base: "1",
        small: "1",
        medium: "1",
        large: "2",
      }}
      columnGap="60px"
      templateColumns={{
        base: "minmax(0, 1fr)",
        small: "minmax(0, 1fr)",
        medium: "minmax(0, 1fr)",
        large: "70% 1fr",
      }}
    >
      {mainChildren}
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
        rowStart="1"
        columnStart="2"
      >
        {showInSidebarBreakpoint && (
          <Flex direction="column">
            {sidebarChildren}
            <View marginTop="40px">
              <CourseContributors contributors={contributors} />
            </View>
            <View marginTop="40px">
              <ShareThis />
            </View>
          </Flex>
        )}
      </Flex>
      {!showInSidebarBreakpoint && (
        <Flex direction="column" columnStart={1}>
          <View marginTop="64px">
            <CourseContributors contributors={contributors} />
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
            gap="10px"
            onClick={() => {
              router.push("/learn/courses");
            }}
          >
            All courses
            <ArrowRightIconCustom />
          </Button>
        </View>
        <View columnStart={1} columnEnd={-1}>
          <CardLayoutCollection
            cardLayouts={cardLayoutData}
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
            filter={(e: CardLayoutData) => e.course.id !== course.id}
          />
        </View>
      </Grid>
    </Grid>
  );
}
