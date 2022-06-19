import { DataStore } from "aws-amplify";
import {
  AmplifyProvider,
  Flex,
  Grid,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { CardLayoutCollection } from "../../ui-components";
import { Course, SkillLevel } from "../../models";
import { useEffect, useState } from "react";
import { HeroCourse } from "../HeroCourse";

export function HomePageCardLayoutCollection() {
  const [heroCourse, setHeroCourse] = useState<Course>({ id: "" });

  const cardLayoutCollectionVariant = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "list",
    large: "grid",
  }) as "list" | "grid";

  async function getHomePageContent() {
    const courses = await DataStore.query(Course);
    console.log(courses);

    const featuredCourse = courses.find((course) => course.isFeatured === true);

    if (featuredCourse) {
      setHeroCourse(featuredCourse);
    } else {
      setHeroCourse(courses[0]);
    }
  }

  useEffect(() => {
    getHomePageContent();
  }, []);

  return (
    <Flex
      direction="column"
      gap={{
        base: "64px",
        small: "64px",
        medium: "64px",
        large: "124px",
      }}
      marginTop={{
        base: "32px",
        small: "32px",
        medium: "64px",
        large: "128px",
      }}
    >
      <HeroCourse course={heroCourse} />
      <AmplifyProvider>
        <CardLayoutCollection type={cardLayoutCollectionVariant} gap="40px" />
      </AmplifyProvider>
    </Flex>
  );
}
