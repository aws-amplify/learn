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

const { Tag, Contributor, Lesson, Course, CourseTag, ContributorCourse, SocialMediaLink } = initSchema(schema);

export {
  Tag,
  Contributor,
  Lesson,
  Course,
  CourseTag,
  ContributorCourse,
  SocialMediaPlatform,
  SkillLevel,
  SocialMediaLink
};