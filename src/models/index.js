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
  "DISCORD": "DISCORD"
};

const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCED": "ADVANCED"
};

const { Tag, Course, Contributor, Lesson, CourseTag, ContributorCourse, SocialMediaLink } = initSchema(schema);

export {
  Tag,
  Course,
  Contributor,
  Lesson,
  CourseTag,
  ContributorCourse,
  SocialMediaPlatform,
  SkillLevel,
  SocialMediaLink
};