import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED"
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

export declare class Contributor {
  readonly id: string;
  readonly Name?: string;
  readonly JobTitle?: string;
  readonly lessons?: (LessonContributor | null)[];
  constructor(init: ModelInit<Contributor>);
  static copyOf(source: Contributor, mutator: (draft: MutableModel<Contributor>) => MutableModel<Contributor> | void): Contributor;
}

export declare class LessonContributor {
  readonly id: string;
  readonly lesson: Lesson;
  readonly contributor: Contributor;
  constructor(init: ModelInit<LessonContributor>);
  static copyOf(source: LessonContributor, mutator: (draft: MutableModel<LessonContributor>) => MutableModel<LessonContributor> | void): LessonContributor;
}

export declare class Lesson {
  readonly id: string;
  readonly Title?: string;
  readonly Description?: string;
  readonly LessonContributors?: (LessonContributor | null)[];
  readonly courseID: string;
  readonly Chapters?: (Chapter | null)[];
  readonly Content?: (string | null)[];
  readonly VideoLink?: string;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class Chapter {
  readonly id: string;
  readonly Title?: string;
  readonly VideoLink?: string;
  readonly lessonID: string;
  constructor(init: ModelInit<Chapter>);
  static copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter>) => MutableModel<Chapter> | void): Chapter;
}

export declare class Course {
  readonly id: string;
  readonly Title?: string;
  readonly Subtitle?: string;
  readonly SkillLevel?: SkillLevel | keyof typeof SkillLevel;
  readonly TimeHours?: number;
  readonly TimeMinutes?: number;
  readonly Bio?: string;
  readonly Description?: string;
  readonly Requirements?: (string | null)[];
  readonly Image?: string;
  readonly Lessons?: (Lesson | null)[];
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class Footer {
  readonly id: string;
  constructor(init: ModelInit<Footer>);
  static copyOf(source: Footer, mutator: (draft: MutableModel<Footer>) => MutableModel<Footer> | void): Footer;
}

export declare class Nav {
  readonly id: string;
  constructor(init: ModelInit<Nav>);
  static copyOf(source: Nav, mutator: (draft: MutableModel<Nav>) => MutableModel<Nav> | void): Nav;
}

export declare class HomePage {
  readonly id: string;
  constructor(init: ModelInit<HomePage>);
  static copyOf(source: HomePage, mutator: (draft: MutableModel<HomePage>) => MutableModel<HomePage> | void): HomePage;
}