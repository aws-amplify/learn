import Link from "next/link";
import { Flex, Text } from "@aws-amplify/ui-react";
import { Contributor } from "../../models";
import { default as ContributorHorizontal } from "./ContributorHorizontalCustom";
import styles from "./CourseContributors.module.scss";

export function CourseContributors({
  contributors,
}: {
  contributors: Contributor[];
}) {
  return (
    <Flex direction="column" ariaLabel="Contributors">
      <Text
        fontFamily="Amazon Ember Display"
        fontSize="0.875rem"
        color="#545B64"
        fontWeight="700"
      >
        CONTRIBUTORS
      </Text>
      {contributors.map((contributor, index) => {
        return (
          <Link
            key={index}
            href={{
              pathname: "/learn/about/[contributor]",
            }}
            as={`/learn/about/${contributor.username}`}
          >
            <a className={styles["course-contributor-hyperlink"]}>
              <ContributorHorizontal
                className={styles["course-contributor"]}
                contributor={contributor}
              />
            </a>
          </Link>
        );
      })}
    </Flex>
  );
}
