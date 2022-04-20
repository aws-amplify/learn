// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chapters, Tags, TagsCourse, Course, ContributorCourse, Contributor, ContributorLesson, Lesson, HomePage, Nav, Footer } = initSchema(schema);

export {
  Chapters,
  Tags,
  TagsCourse,
  Course,
  ContributorCourse,
  Contributor,
  ContributorLesson,
  Lesson,
  HomePage,
  Nav,
  Footer
};