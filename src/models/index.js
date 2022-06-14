// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SocialMediaPlatform = {
  "INSTAGRAM": "INSTAGRAM",
  "LINKEDIN": "LINKEDIN",
  "FACEBOOK": "FACEBOOK",
  "GITHUB": "GITHUB",
  "TWITTER": "TWITTER",
  "TWITCH": "TWITCH",
  "YOUTUBE": "YOUTUBE",
  "DISCORDD": "DISCORDD"
};

const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCED": "ADVANCED"
};

const { Tag, Course, Contributor, CoursesPage, AboutPage, Lesson, Footer, NavBar, HomePage, CourseTag, ContributorCourse, Image, NavMenuItem, SocialMediaLinks } = initSchema(schema);

export {
  Tag,
  Course,
  Contributor,
  CoursesPage,
  AboutPage,
  Lesson,
  Footer,
  NavBar,
  HomePage,
  CourseTag,
  ContributorCourse,
  SocialMediaPlatform,
  SkillLevel,
  Image,
  NavMenuItem,
  SocialMediaLinks
};