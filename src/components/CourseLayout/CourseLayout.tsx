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
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { CourseContributors } from "../CourseContributors";
import { ShareThis } from "../ShareThis";
import styles from "./CourseLayout.module.scss";

export function CourseLayout({
  course,
  contributors,
  topChildren,
  mainChildren,
  sidebarChildren
}: {
  course: Course;
  contributors: Contributor[];
  topChildren: any;
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
      columnStart={2}
      columnGap="60px"
      templateColumns={{
        base: "1fr",
        small: "1fr",
        medium: "1fr",
        large: "70% 1fr",
      }}
    >
      {topChildren}
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
        {sidebarChildren}
        {showInSidebarBreakpoint && (
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
      {mainChildren}
      {!showInSidebarBreakpoint && (
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
