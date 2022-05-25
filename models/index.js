// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCED": "ADVANCED"
};

const { CoursesPage, AboutPage, Contributor, LessonContributor, Lesson, Chapter, Course, Footer, Nav, HomePage } = initSchema(schema);

export {
  CoursesPage,
  AboutPage,
  Contributor,
  LessonContributor,
  Lesson,
  Chapter,
  Course,
  Footer,
  Nav,
  HomePage,
  SkillLevel
};