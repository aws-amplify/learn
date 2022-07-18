import { useRouter } from "next/router";
import { Collection, Grid, Heading, View } from "@aws-amplify/ui-react";
import { Layout } from "../../components/Layout";
import { CardLayout } from "../../components/CardLayout";
import { Course, CourseTag, Tag } from "../../models";
import { useCallback } from "react";
import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";

export default function TagPage(data: any) {
  const relatedCourses = deserializeModel(Course, data.relatedCourses);
  const router = useRouter();
  const { tagname } = router.query;

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
          {(item: Course) => (
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
}

export async function getServerSideProps(context: any) {
  const { DataStore } = withSSRContext(context);
  const { tagname } = context.query;

  const tags: Tag[] = await DataStore.query(Tag, (t: any) =>
    t.name("eq", tagname)
  );

  if (tags.length > 0) {
    const courseTags: CourseTag[] = await DataStore.query(CourseTag);

    const filteredCourses = courseTags
      .filter((e) => e.tag.name === tagname)
      .map((e) => e.course);

    return {
      props: {
        relatedCourses: serializeModel(filteredCourses),
      },
    };
  }

  return {
    notFound: true,
  };
}
