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

export declare class Image {
  readonly altText?: string | null;
  readonly src?: string | null;
  constructor(init: ModelInit<Image>);
}

export declare class NavMenuItem {
  readonly title?: string | null;
  readonly url?: string | null;
  constructor(init: ModelInit<NavMenuItem>);
}

export declare class SocialMediaLink {
  readonly platform?: SocialMediaPlatform | keyof typeof SocialMediaPlatform | null;
  readonly url?: string | null;
  constructor(init: ModelInit<SocialMediaLink>);
}

export declare class Tag {
  readonly id: string;
  readonly name?: string | null;
  readonly courses?: (CourseTag | null)[] | null;
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class Course {
  readonly id: string;
  readonly title?: string | null;
  readonly timeHours?: number | null;
  readonly timeMinutes?: number | null;
  readonly learningObjective?: string | null;
  readonly description?: string | null;
  readonly requirements?: (string | null)[] | null;
  readonly image?: string | null;
  readonly contributors?: (ContributorCourse | null)[] | null;
  readonly courseTags?: (CourseTag | null)[] | null;
  readonly skillLevel?: SkillLevel | keyof typeof SkillLevel | null;
  readonly dateCreated?: string | null;
  readonly homepageID?: string | null;
  readonly isFeatured?: boolean | null;
  readonly imageAltText?: string | null;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class Contributor {
  readonly id: string;
  readonly jobTitle?: string | null;
  readonly socialNetwork?: (SocialMediaLink | null)[] | null;
  readonly courses?: (ContributorCourse | null)[] | null;
  readonly bio?: string | null;
  readonly profilePic?: string | null;
  readonly username?: string | null;
  readonly lastName?: string | null;
  readonly firstName?: string | null;
  constructor(init: ModelInit<Contributor>);
  static copyOf(source: Contributor, mutator: (draft: MutableModel<Contributor>) => MutableModel<Contributor> | void): Contributor;
}

export declare class CoursesPage {
  readonly id: string;
  constructor(init: ModelInit<CoursesPage>);
  static copyOf(source: CoursesPage, mutator: (draft: MutableModel<CoursesPage>) => MutableModel<CoursesPage> | void): CoursesPage;
}

export declare class AboutPage {
  readonly id: string;
  constructor(init: ModelInit<AboutPage>);
  static copyOf(source: AboutPage, mutator: (draft: MutableModel<AboutPage>) => MutableModel<AboutPage> | void): AboutPage;
}

export declare class Lesson {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly videoUrl?: string | null;
  readonly chapter?: number | null;
  readonly courseLesson?: Course | null;
  readonly lessonNumber?: number | null;
  readonly lessonCourseLessonId?: string | null;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class Footer {
  readonly id: string;
  constructor(init: ModelInit<Footer>);
  static copyOf(source: Footer, mutator: (draft: MutableModel<Footer>) => MutableModel<Footer> | void): Footer;
}

export declare class NavBar {
  readonly id: string;
  readonly menuItems?: (NavMenuItem | null)[] | null;
  constructor(init: ModelInit<NavBar>);
  static copyOf(source: NavBar, mutator: (draft: MutableModel<NavBar>) => MutableModel<NavBar> | void): NavBar;
}

export declare class HomePage {
  readonly id: string;
  readonly homePageCourses?: (Course | null)[] | null;
  readonly homePageHeroCourse?: Course | null;
  readonly homePageHomePageHeroCourseId?: string | null;
  constructor(init: ModelInit<HomePage>);
  static copyOf(source: HomePage, mutator: (draft: MutableModel<HomePage>) => MutableModel<HomePage> | void): HomePage;
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