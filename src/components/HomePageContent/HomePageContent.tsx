import { DataStore } from "aws-amplify";
import { Flex, Grid, Placeholder } from "@aws-amplify/ui-react";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { Course } from "../../models";
import { useCallback, useEffect, useState } from "react";
import { HeroCourse } from "../HeroCourse";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";

export function HomePageContent() {
  const [heroCourse, setHeroCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function queryHeroCourse() {
    const featuredCourse = await DataStore.query(Course, (c) =>
      c.isFeatured("eq", true)
    );

    if (featuredCourse.length === 1) {
      setHeroCourse(featuredCourse[0]);
      setIsLoading(false);
    }
  }

  const queryHeroCourseCallback = useCallback(queryHeroCourse, []);

  useFirstDatastoreQuery(queryHeroCourseCallback);

  useEffect(() => {
    // If we still don't have the heroCourse then try and query again
    queryHeroCourseCallback();
  }, [queryHeroCourseCallback]);

  return (
    <Flex
      direction="column"
      gap={{
        base: "64px",
        small: "64px",
        medium: "64px",
        large: "124px",
      }}
    >
      {isLoading ? (
        <Placeholder size="large" isLoaded={!isLoading} />
      ) : (
        <HeroCourse course={heroCourse} />
      )}
      <CardLayoutCollection gap="40px" isOnHomePage={true} />
    </Flex>
  );
}
