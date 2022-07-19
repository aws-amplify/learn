import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SocialMediaPlatform {
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
  FACEBOOK = "FACEBOOK",
  GITHUB = "GITHUB",
  TWITTER = "TWITTER",
  TWITCH = "TWITCH",
  YOUTUBE = "YOUTUBE",
  DISCORD = "DISCORD"
}

export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED"
}

export declare class SocialMediaLink {
  readonly platform: SocialMediaPlatform | keyof typeof SocialMediaPlatform;
  readonly url: string;
  constructor(init: ModelInit<SocialMediaLink>);
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly courses?: (CourseTag | null)[] | null;
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class Course {
  readonly id: string;
  readonly title: string;
  readonly timeHours: number;
  readonly timeMinutes: number;
  readonly learningObjective: string;
  readonly description: string;
  readonly requirements?: string[] | null;
  readonly image?: string | null;
  readonly contributors?: (ContributorCourse | null)[] | null;
  readonly courseTags?: (CourseTag | null)[] | null;
  readonly skillLevel: SkillLevel | keyof typeof SkillLevel;
  readonly dateCreated: string;
  readonly isFeatured: boolean;
  readonly imageAltText?: string | null;
  readonly trailerEmbedId?: string | null;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class Contributor {
  readonly id: string;
  readonly jobTitle: string;
  readonly socialNetwork?: (SocialMediaLink | null)[] | null;
  readonly courses?: (ContributorCourse | null)[] | null;
  readonly bio: string;
  readonly profilePic: string;
  readonly username: string;
  readonly lastName: string;
  readonly firstName: string;
  constructor(init: ModelInit<Contributor>);
  static copyOf(source: Contributor, mutator: (draft: MutableModel<Contributor>) => MutableModel<Contributor> | void): Contributor;
}

export declare class Lesson {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly youtubeEmbedId?: string | null;
  readonly chapter: number;
  readonly courseLesson?: Course | null;
  readonly lessonNumber: number;
  readonly lessonCourseLessonId?: string | null;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class CourseTag {
  readonly id: string;
  readonly tag: Tag;
  readonly course: Course;
  constructor(init: ModelInit<CourseTag>);
  static copyOf(source: CourseTag, mutator: (draft: MutableModel<CourseTag>) => MutableModel<CourseTag> | void): CourseTag;
}

export declare class ContributorCourse {
  readonly id: string;
  readonly course: Course;
  readonly contributor: Contributor;
  constructor(init: ModelInit<ContributorCourse>);
  static copyOf(source: ContributorCourse, mutator: (draft: MutableModel<ContributorCourse>) => MutableModel<ContributorCourse> | void): ContributorCourse;
}