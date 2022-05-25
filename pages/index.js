import Head from "next/head";
import styles from "../styles/Home.module.css";

import NavBarMobileCollapes from "../ui-components/NavBarMobileCollapsed.jsx";
import { HeroLayout } from "../components/FeaturedCourse";
import CourseCard from "../components/CourseCard";
import CallToAction from "../components/CallToAction";

import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider, Image } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

// import { ContributorLarge } from "./ui-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Amplify</title>
        <meta name="description" content="Learn Amplify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AmplifyProvider>
        <main>
          {/* <NavBarMobileCollapes /> */}
          <HeroLayout />
          <CourseCard withShadow={true} />
          <CourseCard withShadow={true} />
          <CourseCard withShadow={true} />
          <CourseCard withShadow={true} />
          <CourseCard withShadow={true} />
          <CallToAction />
        </main>
      </AmplifyProvider>
    </div>
  );
}
