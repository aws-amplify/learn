import {
  Flex,
  Grid,
  Image,
  View,
  Text,
  Button,
  useBreakpointValue,
  Heading,
} from "@aws-amplify/ui-react";
import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Contributor, ContributorCourse } from "../../../models";
import { CardLayoutCollection } from "../../../components/CardLayoutCollection";
import { SocialMediaButton } from "../../../components/SocialMediaButton";
import { capitalizeEnum } from "../../../utils/capitalizeEnum";
import { Fallback } from "../../../components/Fallback";
import ArrowRightIconCustom from "../../../ui-components/ArrowRightIconCustom";
import { ContributorCollection } from "../../../components/ContributorCollection";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { CardLayoutData, Context, MetaInfo } from "../../../types/models";
import { ParsedUrlQuery } from "querystring";
import { getCardLayoutData } from "../../../lib/getData";
import { MetaLayout } from "../../../components/MetaLayout";

const profilePicBorderSize = {
  base: "128px",
  small: "128px",
  medium: "128px",
  large: "256px",
};

const profilePicSize = {
  base: "104px",
  small: "104px",
  medium: "104px",
  large: "232px",
};

export default function ContributorPage(data: {
  contributor: Contributor;
  cardLayoutData: string;
  otherContributors: Contributor[];
}) {
  const router = useRouter();

  const otherContributorsLimit = useBreakpointValue({
    base: 2,
    small: 2,
    medium: 2,
    large: 3,
    xl: 4,
  }) as number;

  const contributorSectionTitle =
    useBreakpointValue({
      base: "none",
      small: "none",
      medium: "block",
    }) || "block";

  const sectionButtonClassNames = useBreakpointValue({
    base: { justifySelf: "stretch" },
    small: { justifySelf: "stretch" },
    medium: { justifySelf: "flex-end" },
  });

  function contributorBreadcrumbCallback(
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

        if (path === "about") {
          result["label"] = "About";
        } else if (path === "[contributor]") {
          result["label"] = "Contributor";
        }

        return result;
      });

      return breadcrumbs;
    }
  }

  const callback = useCallback(contributorBreadcrumbCallback, []);

  if (router.isFallback) {
    return <Fallback />;
  }

  const contributor: Contributor = deserializeModel(
    Contributor,
    data.contributor
  );
  const cardLayoutData: CardLayoutData[] = JSON.parse(data.cardLayoutData);
  const otherContributors: Contributor[] = deserializeModel(
    Contributor,
    data.otherContributors
  );

  // Contributor page meta data
  const metaInfo: MetaInfo = {
    title: `${contributor.firstName} ${contributor.lastName}`,
    description: contributor.bio,
    image: contributor.profilePic,
  };

  return (
    <MetaLayout
      metaInfo={metaInfo}
      showBreadcrumb={true}
      breadcrumbCallback={callback}
    >
      <Flex
        columnStart={{
          base: "1",
          small: "1",
          medium: "1",
          large: "2",
          xl: "2",
        }}
        direction="column"
        rowGap={{
          base: "64px",
          small: "64px",
          medium: "64px",
          large: "128px",
        }}
      >
        <Flex
          justifyContent="space-between"
          direction={{
            base: "column-reverse",
            small: "column-reverse",
            medium: "column-reverse",
            large: "row",
          }}
          columnGap="100px"
        >
          <Flex direction="column">
            <Heading level={1} fontWeight="300" fontSize="2.5rem">
              {`${contributor.firstName} ${contributor.lastName}`}
            </Heading>
            <Heading
              level={2}
              fontFamily="Amazon Ember Display"
              fontWeight="400"
              fontSize="1.5rem"
            >
              {contributor.jobTitle}
            </Heading>
            <Text fontWeight="400" fontSize="1rem">
              {contributor.bio}
            </Text>
            {contributor.socialNetwork &&
            contributor.socialNetwork.length > 0 ? (
              <Flex>
                {contributor.socialNetwork?.map((e, index: number) => {
                  return (
                    <SocialMediaButton
                      key={index}
                      platform={e?.platform}
                      url={e?.url || ""}
                      iconAriaLabel={`${
                        contributor.firstName
                      }'s ${capitalizeEnum(e?.platform)} profile link`}
                      iconWidth="24px"
                      iconHeight="24px"
                    ></SocialMediaButton>
                  );
                })}
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width={profilePicBorderSize}
            height={profilePicBorderSize}
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="3px solid rgba(169,182,183,1)"
            borderRadius="50%"
            padding="9px 9px 9px 9px"
            backgroundColor="rgba(255,255,255,1)"
          >
            <Image
              width={profilePicSize}
              height={profilePicSize}
              grow="1"
              basis="104px"
              alignSelf="stretch"
              position="relative"
              borderRadius="50%"
              src={contributor?.profilePic || ""}
              alt={`Profile pic of ${contributor.firstName}`}
            ></Image>
          </Flex>
        </Flex>

        <Grid
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
        >
          <Text
            display={contributorSectionTitle}
            fontFamily="'Amazon Ember Display'"
            fontWeight="400"
            fontSize="2rem"
          >
            {`Courses by ${contributor.firstName}`}
          </Text>
          <View
            order={{
              base: 1,
              small: 1,
              medium: 0,
            }}
            alignSelf="center"
            style={sectionButtonClassNames}
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
          <View columnSpan={2}>
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
              isPaginated={cardLayoutData.length > 3}
              itemsPerPage={cardLayoutData.length > 3 ? 3 : undefined}
            />
          </View>
        </Grid>
        <Grid
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
        >
          <Text
            fontFamily="'Amazon Ember Display'"
            fontWeight="400"
            fontSize="2rem"
          >
            Other Contributors
          </Text>
          <View
            order={{
              base: 1,
              small: 1,
              medium: 0,
            }}
            alignSelf="center"
            style={sectionButtonClassNames}
          >
            <Button
              width="100%"
              aria-label="All contributors"
              gap="10px"
              onClick={() => {
                router.push("/learn/about");
              }}
            >
              All contributors
              <ArrowRightIconCustom />
            </Button>
          </View>
          <View columnSpan={2}>
            <ContributorCollection
              type="grid"
              contributors={otherContributors}
              gap="20px"
              templateColumns={{
                base: "1fr",
                small: "1fr",
                medium: "1fr 1fr",
                large: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              }}
              useLargeVariant={false}
              filter={(e: Contributor) => e.username !== contributor.username}
              limit={otherContributorsLimit}
            />
          </View>
        </Grid>
      </Flex>
    </MetaLayout>
  );
}

interface ContributorPageParams extends ParsedUrlQuery {
  contributor: string;
}

interface ContributorPageProps {
  contributor: JSON;
  cardLayoutData: string;
  otherContributors: JSON;
}

export async function getStaticPaths(
  context: GetStaticPaths & Context
): Promise<GetStaticPathsResult<ContributorPageParams>> {
  const { DataStore } = withSSRContext(context);
  const contributors: Contributor[] = await DataStore.query(Contributor);

  return {
    paths: contributors.map((contributor) => ({
      params: {
        contributor: contributor.username,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<ContributorPageParams> & Context
): Promise<GetStaticPropsResult<ContributorPageProps>> {
  if (context.params) {
    const { DataStore } = withSSRContext(context);
    const { contributor: username } = context.params;

    let contributorResults: Contributor[] = await DataStore.query(
      Contributor,
      (c: any) => c.username("eq", username)
    );

    const contributorCoursesRelationships: ContributorCourse[] =
      await DataStore.query(ContributorCourse);

    const filteredCourses = contributorCoursesRelationships
      .filter((e) => e.contributor.username === username)
      .map((e) => e.course);

    const cardLayoutData = await getCardLayoutData(context);

    const filteredCardLayoutData = cardLayoutData.filter((cardLayout) =>
      filteredCourses.find((e) => e.id === cardLayout.course.id)
    );

    const otherContributors = await DataStore.query(Contributor, (c: any) =>
      c.username("ne", username)
    );

    if (contributorResults.length > 0) {
      return {
        props: {
          contributor: serializeModel(contributorResults[0]),
          cardLayoutData: JSON.stringify(filteredCardLayoutData),
          otherContributors: serializeModel(otherContributors),
        },
        revalidate: 60,
      };
    }
  }

  return {
    notFound: true,
  };
}
