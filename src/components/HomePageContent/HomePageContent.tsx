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

  const callback = useCallback(queryHeroCourse, []);

  useFirstDatastoreQuery(callback);

  useEffect(() => {
    // If we still don't have the heroCourse then try and query again
    if (heroCourse?.id === "") {
      queryHeroCourse();
    }
  }, [heroCourse?.id]);

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
        <>
          <Grid
            templateColumns={{
              base: "1fr",
              small: "1fr",
              medium: "1fr",
              large: "1fr 1fr",
            }}
            autoFlow="column"
            gap="20px"
          >
            {new Array(6).fill(undefined).map((_, index) => (
              <Placeholder
                columnStart="1"
                size="large"
                isLoaded={!isLoading}
                key={index}
              />
            ))}
            {new Array(6).fill(undefined).map((_, index) => (
              <Placeholder
                columnStart={{ base: "1", small: "1", medium: "1", large: "2" }}
                size="large"
                isLoaded={!isLoading}
                key={index}
              />
            ))}
          </Grid>
        </>
      ) : (
        <HeroCourse course={heroCourse} />
      )}
      <CardLayoutCollection gap="40px" isOnHomePage={true} />
    </Flex>
  );
}
