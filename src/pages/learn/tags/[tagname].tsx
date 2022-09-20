import { useRouter } from "next/router";
import { Grid, Heading, View } from "@aws-amplify/ui-react";
import { Tag } from "../../../models";
import { useCallback } from "react";
import { withSSRContext } from "aws-amplify";
import { Fallback } from "../../../components/Fallback";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { CardLayoutData, Context, MetaInfo } from "../../../types/models";
import { ParsedUrlQuery } from "querystring";
import { getCardLayoutData } from "../../../lib/getData";
import { CardLayoutCollection } from "../../../components/CardLayoutCollection";
import { MetaLayout } from "../../../components/MetaLayout";

export default function TagPage(data: { cardLayoutData: string }) {
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

  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const cardLayoutData = JSON.parse(data.cardLayoutData);
  const { tagname } = router.query;

  // All tags page meta data
  const metaInfo: MetaInfo = {
    title: `#${tagname}`,
    description: `Courses tagged by #${tagname}`,
  };

  return (
    <MetaLayout
      metaInfo={metaInfo}
      showBreadcrumb={true}
      breadcrumbCallback={callback}
    >
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
          <Heading className="page-heading" level={1}>
            {`#${tagname}`}
          </Heading>
        </Grid>
        <CardLayoutCollection
          cardLayouts={cardLayoutData}
          templateColumns={{
            base: "1fr",
            small: "1fr",
            medium: "1fr",
            large: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          gap="64px"
          isOnHomePage={false}
          marginBottom="30px"
        />
      </View>
    </MetaLayout>
  );
}

interface TagnamePageParams extends ParsedUrlQuery {
  tagname: string;
}

interface TagnamePageProps {
  cardLayoutData: string;
}

export async function getStaticPaths(
  context: GetStaticPaths & Context
): Promise<GetStaticPathsResult<TagnamePageParams>> {
  const { DataStore } = withSSRContext(context);
  const tags: Tag[] = await DataStore.query(Tag);

  return {
    paths: tags.map((tag) => ({
      params: { tagname: tag.name },
    })),
    fallback: true,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<TagnamePageParams> & Context
): Promise<GetStaticPropsResult<TagnamePageProps>> {
  if (context.params) {
    const { DataStore } = withSSRContext(context);
    const { tagname } = context.params;

    const tags: Tag[] = await DataStore.query(Tag, (t: any) =>
      t.name("eq", tagname)
    );

    if (tags.length > 0) {
      const cardLayoutData: CardLayoutData[] = await getCardLayoutData(context);

      const filteredData = cardLayoutData.filter((e) =>
        e.tags.find((tag) => tag.name === tagname)
      );

      return {
        props: {
          cardLayoutData: JSON.stringify(filteredData),
        },
        revalidate: 60,
      };
    }
  }

  return {
    notFound: true,
  };
}
