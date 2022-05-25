import Head from "next/head";
import styles from "../../styles/Home.module.css";

import CourseCard from "../../components/CourseCard";

import "@aws-amplify/ui-react/styles.css";

// import { ContributorLarge } from "./ui-components";

import {
  AmplifyProvider,
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from "@aws-amplify/ui-react";

let mockText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Morbi tristique senectus et netus et malesuada.`;

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Amplify</title>
        <meta name="description" content="Learn Amplify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AmplifyProvider>
        <main>
          <View as="div" margin={"32px"}>
            <Heading level="h1">Courses</Heading>
            <Text color="#545B64">{mockText}</Text>
            <Flex direction="column">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </Flex>
          </View>
        </main>
      </AmplifyProvider>
    </div>
  );
}
