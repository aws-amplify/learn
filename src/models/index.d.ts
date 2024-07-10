import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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

type EagerSocialMediaLink = {
  readonly platform: SocialMediaPlatform | keyof typeof SocialMediaPlatform;
  readonly url: string;
}

type LazySocialMediaLink = {
  readonly platform: SocialMediaPlatform | keyof typeof SocialMediaPlatform;
  readonly url: string;
}

export declare type SocialMediaLink = LazyLoading extends LazyLoadingDisabled ? EagerSocialMediaLink : LazySocialMediaLink

export declare const SocialMediaLink: (new (init: ModelInit<SocialMediaLink>) => SocialMediaLink)













type EagerTag = {
  readonly id: string;
  readonly name: string;
  readonly courses?: (CourseTag | null)[] | null;
}

type LazyTag = {
  readonly id: string;
  readonly name: string;
  readonly courses: AsyncCollection<CourseTag>;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerContributor = {
  readonly id: string;
  readonly jobTitle: string;
  readonly socialNetwork?: (SocialMediaLink | null)[] | null;
  readonly courses?: (ContributorCourse | null)[] | null;
  readonly bio: string;
  readonly profilePic: string;
  readonly username: string;
  readonly lastName: string;
  readonly firstName: string;
}

type LazyContributor = {
  readonly id: string;
  readonly jobTitle: string;
  readonly socialNetwork?: (SocialMediaLink | null)[] | null;
  readonly courses: AsyncCollection<ContributorCourse>;
  readonly bio: string;
  readonly profilePic: string;
  readonly username: string;
  readonly lastName: string;
  readonly firstName: string;
}

export declare type Contributor = LazyLoading extends LazyLoadingDisabled ? EagerContributor : LazyContributor

export declare const Contributor: (new (init: ModelInit<Contributor>) => Contributor) & {
  copyOf(source: Contributor, mutator: (draft: MutableModel<Contributor>) => MutableModel<Contributor> | void): Contributor;
}

type EagerLesson = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly youtubeEmbedId?: string | null;
  readonly chapter: number;
  readonly courseLesson?: Course | null;
  readonly lessonNumber: number;
  readonly description: string;
  readonly lessonCourseLessonId?: string | null;
}

type LazyLesson = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly youtubeEmbedId?: string | null;
  readonly chapter: number;
  readonly courseLesson: AsyncItem<Course | undefined>;
  readonly lessonNumber: number;
  readonly description: string;
  readonly lessonCourseLessonId?: string | null;
}

export declare type Lesson = LazyLoading extends LazyLoadingDisabled ? EagerLesson : LazyLesson

export declare const Lesson: (new (init: ModelInit<Lesson>) => Lesson) & {
  copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

type EagerCourse = {
  readonly id: string;
  readonly title: string;
  readonly timeHours: number;
  readonly timeMinutes: number;
  readonly learningObjective: string;
  readonly description: string;
  readonly requirements?: string[] | null;
  readonly image: string;
  readonly contributors?: (ContributorCourse | null)[] | null;
  readonly courseTags?: (CourseTag | null)[] | null;
  readonly skillLevel: SkillLevel | keyof typeof SkillLevel;
  readonly dateCreated: string;
  readonly isFeatured: boolean;
  readonly imageAltText?: string | null;
  readonly trailerEmbedId?: string | null;
  readonly courseUrlTitle: string;
  readonly published?: boolean | null;
}

type LazyCourse = {
  readonly id: string;
  readonly title: string;
  readonly timeHours: number;
  readonly timeMinutes: number;
  readonly learningObjective: string;
  readonly description: string;
  readonly requirements?: string[] | null;
  readonly image: string;
  readonly contributors: AsyncCollection<ContributorCourse>;
  readonly courseTags: AsyncCollection<CourseTag>;
  readonly skillLevel: SkillLevel | keyof typeof SkillLevel;
  readonly dateCreated: string;
  readonly isFeatured: boolean;
  readonly imageAltText?: string | null;
  readonly trailerEmbedId?: string | null;
  readonly courseUrlTitle: string;
  readonly published?: boolean | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerCourseTag = {
  readonly id: string;
  readonly tag: Tag;
  readonly course: Course;
}

type LazyCourseTag = {
  readonly id: string;
  readonly tag: AsyncItem<Tag>;
  readonly course: AsyncItem<Course>;
}

export declare type CourseTag = LazyLoading extends LazyLoadingDisabled ? EagerCourseTag : LazyCourseTag

export declare const CourseTag: (new (init: ModelInit<CourseTag>) => CourseTag) & {
  copyOf(source: CourseTag, mutator: (draft: MutableModel<CourseTag>) => MutableModel<CourseTag> | void): CourseTag;
}

type EagerContributorCourse = {
  readonly id: string;
  readonly contributor: Contributor;
  readonly course: Course;
}

type LazyContributorCourse = {
  readonly id: string;
  readonly contributor: AsyncItem<Contributor>;
  readonly course: AsyncItem<Course>;
}

export declare type ContributorCourse = LazyLoading extends LazyLoadingDisabled ? EagerContributorCourse : LazyContributorCourse

export declare const ContributorCourse: (new (init: ModelInit<ContributorCourse>) => ContributorCourse) & {
  copyOf(source: ContributorCourse, mutator: (draft: MutableModel<ContributorCourse>) => MutableModel<ContributorCourse> | void): ContributorCourse;
}