import Head from "next/head";
import styles from "../../styles/Home.module.css";

import CardImage from "../../components/CardImage";
import CourseStats from "../../components/CourseStats";
import CourseTags from "../../components/CourseTags";
import CourseTable from "../../components/CourseTable";
import DataCard from "../../components/DataCard";
import YoutubeEmbed from "../../components/YouTubeEmbed";

import "@aws-amplify/ui-react/styles.css";

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

let tags = ["#fullstack", "#mobile"];

let chapters = [
  {
    title: "Chapter One",
    lessons: ["Introduction", "Getting Started", "Visual backend builder"],
  },
  {
    title: "Chapter Two",
    lessons: ["Bind UI to data", "App backend managment"],
  },
];

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
            <YoutubeEmbed embedId={"3M8lD753PTk"} />

            <CourseTable chapters={chapters} />

            <Heading
              level={1}
              fontWeight={200}
              marginBottom={24}
              fontSize={32}
              marginTop={32}
            >
              Build fullstack mobile applications with Amplify
            </Heading>
            <Text color="#545B64" marginBottom={20} marginTop={24}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tristique senectus et netus et malesuada.
            </Text>
          </View>
        </main>
      </AmplifyProvider>
    </div>
  );
}
