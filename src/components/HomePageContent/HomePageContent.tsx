import { DataStore, Hub } from "aws-amplify";
import {
  AmplifyProvider,
  Flex,
  Grid,
  Placeholder,
} from "@aws-amplify/ui-react";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { Course } from "../../models";
import { useEffect, useState } from "react";
import { HeroCourse } from "../HeroCourse";

export function HomePageContent() {
  const [heroCourse, setHeroCourse] = useState<Course>({ id: "" });
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

  // For the first page load, check to see if DataStore is ready before querying
  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen("datastore", (capsule) => {
      console.log("removing listener");
      const {
        payload: { event, data },
      } = capsule;

      if (event === "ready") {
        queryHeroCourse();
      }
    });

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();

    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    // If we still don't have the heroCourse then try and query again
    if (heroCourse.id === '') {
      queryHeroCourse();
    }
  }, [heroCourse.id]);

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
      <AmplifyProvider>
        <CardLayoutCollection
          gap="40px"
          isOnHomePage={true}
        />
      </AmplifyProvider>
    </Flex>
  );
}
