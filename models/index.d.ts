import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Chapters {
  readonly id: string;
  readonly ChapterVideoURL?: string;
  readonly lessonID: string;
  readonly Title?: string;
  constructor(init: ModelInit<Chapters>);
  static copyOf(source: Chapters, mutator: (draft: MutableModel<Chapters>) => MutableModel<Chapters> | void): Chapters;
}

export declare class Tags {
  readonly id: string;
  readonly TagName?: string;
  readonly TagURL?: string;
  readonly TagsCourses?: (TagsCourse | null)[];
  constructor(init: ModelInit<Tags>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

export declare class TagsCourse {
  readonly id: string;
  readonly tags: Tags;
  readonly course: Course;
  constructor(init: ModelInit<TagsCourse>);
  static copyOf(source: TagsCourse, mutator: (draft: MutableModel<TagsCourse>) => MutableModel<TagsCourse> | void): TagsCourse;
}

export declare class Course {
  readonly id: string;
  readonly tagss?: (TagsCourse | null)[];
  readonly contributors?: (ContributorCourse | null)[];
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class ContributorCourse {
  readonly id: string;
  readonly contributor: Contributor;
  readonly course: Course;
  constructor(init: ModelInit<ContributorCourse>);
  static copyOf(source: ContributorCourse, mutator: (draft: MutableModel<ContributorCourse>) => MutableModel<ContributorCourse> | void): ContributorCourse;
}

export declare class Contributor {
  readonly id: string;
  readonly Name?: string;
  readonly JobTitle?: string;
  readonly ContributorLessons?: (ContributorLesson | null)[];
  readonly ContributorCourses?: (ContributorCourse | null)[];
  constructor(init: ModelInit<Contributor>);
  static copyOf(source: Contributor, mutator: (draft: MutableModel<Contributor>) => MutableModel<Contributor> | void): Contributor;
}

export declare class ContributorLesson {
  readonly id: string;
  readonly contributor: Contributor;
  readonly lesson: Lesson;
  constructor(init: ModelInit<ContributorLesson>);
  static copyOf(source: ContributorLesson, mutator: (draft: MutableModel<ContributorLesson>) => MutableModel<ContributorLesson> | void): ContributorLesson;
}

export declare class Lesson {
  readonly id: string;
  readonly contributors?: (ContributorLesson | null)[];
  readonly Chapters?: (Chapters | null)[];
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class HomePage {
  readonly id: string;
  constructor(init: ModelInit<HomePage>);
  static copyOf(source: HomePage, mutator: (draft: MutableModel<HomePage>) => MutableModel<HomePage> | void): HomePage;
}

export declare class Nav {
  readonly id: string;
  constructor(init: ModelInit<Nav>);
  static copyOf(source: Nav, mutator: (draft: MutableModel<Nav>) => MutableModel<Nav> | void): Nav;
}

export declare class Footer {
  readonly id: string;
  constructor(init: ModelInit<Footer>);
  static copyOf(source: Footer, mutator: (draft: MutableModel<Footer>) => MutableModel<Footer> | void): Footer;
}