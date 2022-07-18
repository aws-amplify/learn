import {
  Flex,
  Grid,
  Image,
  View,
  Text,
  Button,
  useBreakpointValue,
  Placeholder,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Contributor, ContributorCourse, Course } from "../../models";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import ContributorCollection from "../../components/Contributors/ContributorCollection";
import { SocialMediaButton } from "../../components/SocialMediaButton";
import { capitalizeEnum } from "../../utils/transformEnumsFromAmplify";

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

const ContributorPage = () => {
  const router = useRouter();
  const { contributor: username, id }: { contributor?: string; id?: string } =
    router.query;
  const [contributor, setContributor] = useState<Contributor>({ id: "" });
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  async function getContributor() {
    let result;
    if (id) {
      result = await DataStore.query(Contributor, id);

      if (result) {
        setContributor(result);
        setIsLoading(false);
      }
    } else if (username) {
      result = await DataStore.query(Contributor, (c) =>
        c.username("eq", username)
      );

      if (result.length > 0) {
        setContributor(result[0]);
        setIsLoading(false);
      }
    }
  }

  const getContributorCallback = useCallback(getContributor, [id, username]);
  useFirstDatastoreQuery(getContributorCallback);

  async function getContributorCourses() {
    const contributorCourses = await DataStore.query(ContributorCourse);

    const result = contributorCourses.filter(
      (e) => e.contributor.username === username
    );

    setCourses(result.map((e) => e.course));
  }

  const getContributorCoursesCallback = useCallback(getContributorCourses, [
    username,
  ]);
  useFirstDatastoreQuery(getContributorCoursesCallback);

  useEffect(() => {
    getContributorCallback();
    getContributorCoursesCallback();
  }, [getContributorCallback, getContributorCoursesCallback]);

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

  return (
    <Layout showBreadcrumb={true} breadcrumbCallback={callback}>
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
        {isLoading ? (
          <Placeholder size="large" isLoaded={!isLoading} />
        ) : (
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
              <Text fontWeight="300" fontSize="2.5rem">
                {`${contributor.firstName} ${contributor.lastName}`}
              </Text>
              <Text
                fontFamily="Amazon Ember Display"
                fontWeight="400"
                fontSize="1.5rem"
              >
                {contributor.jobTitle}
              </Text>
              <Text fontWeight="400" fontSize="1rem">
                {contributor.bio}
              </Text>
              {contributor.socialNetwork &&
              contributor.socialNetwork.length > 0 ? (
                <Flex>
                  {contributor.socialNetwork.map((e, index) => {
                    return (
                      <SocialMediaButton
                        key={index}
                        platform={e?.platform}
                        url={e?.url}
                        iconAriaLabel={`${capitalizeEnum(
                          e?.platform
                        )} link for ${contributor.firstName}`}
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
        )}
        {isLoading ? (
          <Placeholder size="large" isLoaded={!isLoading} />
        ) : (
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
              as="div"
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
                onClick={() => {
                  router.push("/courses");
                }}
              >
                All courses
              </Button>
            </View>
            <View as="div" columnSpan={2}>
              <CardLayoutCollection
                items={courses}
                type="grid"
                templateColumns={{
                  base: "1fr",
                  small: "1fr",
                  medium: "1fr 1fr",
                  large: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
                gap="64px 20px"
              />
            </View>
          </Grid>
        )}
        {isLoading ? (
          <Placeholder size="large" isLoaded={!isLoading} />
        ) : (
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
              as="div"
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
                onClick={() => {
                  router.push("/about");
                }}
              >
                All contributors
              </Button>
            </View>
            <View as="div" columnSpan={2}>
              <ContributorCollection
                type="grid"
                templateColumns={{
                  base: "1fr",
                  small: "1fr",
                  medium: "1fr 1fr",
                  large: "1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr",
                }}
                gap="20px"
                useLargeVariant={false}
                filter={(e: Contributor) => e.username !== contributor.username}
                limit={otherContributorsLimit}
              />
            </View>
          </Grid>
        )}
      </Flex>
    </Layout>
  );
};

export default ContributorPage;
