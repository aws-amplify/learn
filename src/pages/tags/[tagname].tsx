import { useRouter } from "next/router";
import { Collection, Grid, Heading, View } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { CardLayout } from "../../components/CardLayout";
import { Course, CourseTag } from "../../models";
import { useCallback, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";

const TagPage = () => {
  const router = useRouter();
  const { tagname } = router.query;
  const [relatedCourses, setRelatedCourses] = useState<Course[]>([]);

  async function getRelatedCourses() {
    const courseTags = await DataStore.query(CourseTag);

    const result = courseTags.filter((e) => e.tag.name === tagname);

    setRelatedCourses(result.map((e) => e.course));
  }

  const getRelatedCoursesCallback = useCallback(getRelatedCourses, [tagname]);

  useFirstDatastoreQuery(getRelatedCoursesCallback);

  useEffect(() => {
    getRelatedCoursesCallback();
  }, [getRelatedCoursesCallback]);

  function tagsBreadcrumbCallback(
    pathnameArray: string[],
    asPathArray: string[]
  ) {
    if (pathnameArray.length === asPathArray.length) {
      const breadcrumbs = pathnameArray.map((path, index) => {
        const result = {
          href: "",
          label: "",
          isCurrent: index === pathnameArray.length - 1,
        };

        result["href"] = "/" + asPathArray.slice(0, index + 1).join("/");

        if (path === "tags") {
          result["label"] = "All tags";
        } else if (path === "[tagname]") {
          result["label"] = "Tag";
        }

        return result;
      });

      return breadcrumbs;
    }
  }

  const callback = useCallback(tagsBreadcrumbCallback, []);

  return (
    <Layout showBreadcrumb={true} breadcrumbCallback={callback}>
      <View
        columnStart={{
          base: "1",
          small: "1",
          medium: "1",
          large: "2",
          xl: "2",
        }}
      >
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
            {`#${tagname}`}
          </Heading>
        </Grid>
        <Collection
          type="grid"
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr 1fr",
            large: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          gap="64px"
          items={relatedCourses}
        >
          {(item, index) => (
            <CardLayout
              isOnHomePage={false}
              height="auto"
              width="auto"
              margin="0 0px 0px 0"
              course={item}
              key={item.id}
            ></CardLayout>
          )}
        </Collection>
      </View>
    </Layout>
  );
};

export default TagPage;
