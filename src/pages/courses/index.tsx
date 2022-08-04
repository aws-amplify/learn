import { Grid, Heading, View, useBreakpointValue } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { CardLayoutCollection } from "../../components/CardLayoutCollection";
import { withSSRContext } from "aws-amplify";
import { CourseTag } from "../../models";
import { CardLayoutData } from "../../types";

export default function CoursesPage(data: any) {
  const cardLayouts: CardLayoutData[] = JSON.parse(data.cardLayouts);

  const itemsPerPageBreakpoint = useBreakpointValue({
    base: 3,
    small: 3,
    medium: 3,
    large: 4,
    xl: 6,
  }) as number;

  return (
    <Layout>
      <View columnStart={{ base: "1", small: "1", medium: "1", large: "2" }}>
        <Grid
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr",
          }}
          gap="16px"
          marginBottom={{
            base: "64px",
            small: "64px",
            medium: "64px",
            large: "128px",
          }}
        >
          <Heading fontFamily="Amazon Ember" fontWeight="300" level={1}>
            Courses
          </Heading>
        </Grid>
        <View
          as="div"
          marginBottom={{
            base: "118px",
            small: "118px",
            medium: "75px",
            large: "152px",
          }}
        >
          <CardLayoutCollection
            cardLayouts={cardLayouts}
            templateColumns={{
              base: "1fr",
              small: "1fr",
              medium: "1fr",
              large: "1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
            gap="64px"
            isOnHomePage={false}
            itemsPerPage={itemsPerPageBreakpoint}
            marginBottom="30px"
          />
        </View>
      </View>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const { DataStore } = withSSRContext(context);

  const courseTags: CourseTag[] = await DataStore.query(CourseTag);

  const groupedCourseTags: Record<string, CardLayoutData> = {};

  courseTags.forEach((courseTag) => {
    if (!groupedCourseTags.hasOwnProperty(courseTag.course.id)) {
      const tags = [courseTag.tag];

      groupedCourseTags[courseTag.course.id] = {
        course: courseTag.course,
        tags,
      };
    } else {
      const cardLayout = groupedCourseTags[courseTag.course.id];

      const tags = cardLayout.tags;
      tags.push(courseTag.tag);

      groupedCourseTags[courseTag.course.id] = {
        course: courseTag.course,
        tags,
      };
    }
  });

  const flattenedCourseLayouts = Object.values(groupedCourseTags);

  return {
    props: {
      cardLayouts: JSON.stringify(flattenedCourseLayouts),
    },
    revalidate: 60,
  };
}
