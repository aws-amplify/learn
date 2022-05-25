import Head from "next/head";
import styles from "../../styles/Home.module.css";

import CardImage from "../../components/CardImage";
import CourseStats from "../../components/CourseStats";
import CourseTags from "../../components/CourseTags";
import CourseTable from "../../components/CourseTable";
import DataCard from "../../components/DataCard";

import "@aws-amplify/ui-react/styles.css";

import { ContributorLarge } from "./ui-components";

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
            <CourseStats />

            <Heading level={1} fontWeight={200} marginBottom={24} fontSize={32}>
              Build fullstack mobile applications with Amplify
            </Heading>

            <CourseTags tags={tags} />

            <Text color="#545B64" marginBottom={20} marginTop={24}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tristique senectus et netus et malesuada.
            </Text>

            <Flex direction={"column"} marginBottom={72}>
              <Button backgroundColor={"#EE7411"} color={"#fff"}>
                Start course
              </Button>
              <Button color="#545B64">
                <Image
                  src="/icons/play.svg"
                  alt="play trailer"
                  marginRight={14.7}
                />
                Watch trailer
              </Button>
            </Flex>

            <CardImage />

            <DataCard title={"Skill Level"} data={"Advanced"} />
            <DataCard title={"Time to Complete"} data={"2h 36m"} />

            <CourseTable chapters={chapters} />

            <View as="div" marginTop="64px">
              <Heading
                level="3"
                fontSize={32}
                lineHeight={"40px"}
                fontWeight={400}
                marginBottom={24}
              >
                {`What you’ll learn`}
              </Heading>
              <Text lineHeight={"24px"} color={"#545B64"} marginBottom={24}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus et malesuada.
              </Text>
            </View>
          </View>
        </main>
      </AmplifyProvider>
    </div>
  );
}
