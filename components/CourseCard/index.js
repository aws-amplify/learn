import CardImage from "../CardImage";
import CourseStats from "../CourseStats";
import CourseTags from "../CourseTags";
import CourseTitleLink from "../CourseTitleLink";

import styles from "./styles.module.css";

import { Text } from "@aws-amplify/ui-react";

function courseCard({ newCourse, withShadow }) {
  let tags = ["#tag", "#tag"];
  return (
    <div
      className={withShadow ? `${styles.card} ${styles.shadow}` : styles.card}
    >
      <CardImage />
      <CourseStats newCourse={newCourse} />
      <h2>
        <CourseTitleLink>
          Build fullstack mobile applications with Amplify
        </CourseTitleLink>
      </h2>
      <Text color="#545B64" marginBottom={20}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi tristique
        senectus et netus et malesuada.
      </Text>
      <CourseTags tags={tags} />
    </div>
  );
}

export default courseCard;
