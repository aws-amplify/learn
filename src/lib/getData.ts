import { Amplify, withSSRContext } from "aws-amplify";
import { GetStaticPropsContext } from "next";
import amplifyconfig from "../amplifyconfiguration.json";
import {
  Contributor,
  ContributorCourse,
  Course,
  CourseTag,
  Lesson,
  Tag,
} from "../models";
import { CardLayoutData, Context, CoursePageParams } from "../types/models";

export function configureAmplify() {
  Amplify.configure({ ...amplifyconfig, ssr: true });
}

configureAmplify();

export async function getFeaturedCourseData(
  context: GetStaticPropsContext & Context
): Promise<{ course: Course; tags: Tag[] } | null> {
  const { DataStore } = withSSRContext(context);

  const courses: Course[] = await DataStore.query(Course, (c: any) =>
    c.published.eq(true)
  );

  if (courses.length > 0) {
    const featuredCourses: Course[] = await DataStore.query(Course, (c: any) =>
      c.published.eq(true) && c.isFeatured.eq(true)
  );

    const course =
      featuredCourses.length === 1 ? featuredCourses[0] : courses[0];

    const tags = await getCourseTags(context, course.id);

    return { course, tags };
  }
  return null;
}

export async function getCourseTags(
  context: GetStaticPropsContext & Context,
  courseId: string, 
): Promise<Tag[]> {
  const { DataStore } = withSSRContext(context);

  const courseTags: CourseTag[] = await DataStore.query(CourseTag);
  const filteredCourseTags = [];

  for (const courseTag of courseTags) {
    const course = await courseTag.course;
    
    if (course.published && course.id === courseId) {
      filteredCourseTags.push(courseTag)
    }
  }

  const tagsList = [];

  for (const filteredCourseTag of filteredCourseTags) {
    const tag = await filteredCourseTag.tag;
    const course = await filteredCourseTag.course;
    const id = await filteredCourseTag.id;
    
    tagsList.push({id, tag, course});
  }

  return tagsList.map((e) => e.tag);
}

export async function getCardLayoutData(
  context: GetStaticPropsContext & Context
): Promise<CardLayoutData[]> {
  const { DataStore } = withSSRContext(context);

  let courseTags: CourseTag[] = await DataStore.query(CourseTag);

  // Go through and group up the tags to their respective courses
    const groupedCourseTags: Record<string, CardLayoutData> = {};
    for (const courseTag of courseTags) {
      const course = await courseTag.course;
      const tag = await courseTag.tag;
      if (course.published) {
        if (!groupedCourseTags.hasOwnProperty(course.id)) {
  
          groupedCourseTags[course.id] = {
            course: course,
            tags: [tag],
          };
        } else {
          const cardLayout = groupedCourseTags[course.id];
          const tags = cardLayout.tags;
          tags.push(tag);
  
          groupedCourseTags[course.id] = {
            course: course,
            tags,
          };
        }
      }
    };

  return Object.values(groupedCourseTags)
}

export async function getCourseAndLessonData(
  context: GetStaticPropsContext & Context
): Promise<{ course: Course; lessons: Lesson[] } | null> {
  const { DataStore } = withSSRContext(context);
  const { courseurltitle: encodedCourseUrlTitle } =
    context.params as CoursePageParams;

  const courseUrlTitle = decodeURIComponent(encodedCourseUrlTitle);

  // Get the course title without the appended id
  const originalCourseUrlTitle = courseUrlTitle
    ?.substring(0, courseUrlTitle?.lastIndexOf("-"))
    .replace(/-/g, " ");

  // Get the course Id prefix
  const courseIdPrefix = courseUrlTitle?.substring(
    courseUrlTitle?.lastIndexOf("-") + 1,
    courseUrlTitle.length
  );

  const courseResults: Course[] = await DataStore.query(Course, (c: any) =>
    c.published.eq(true) &&
    c.id.beginsWith(courseIdPrefix) &&
    c.courseUrlTitle.eq(originalCourseUrlTitle)
  );

  const courseResult = courseResults[0];

  if (courseResult) {
    const lessons: Lesson[] = await DataStore.query(Lesson, (l: any) =>
      l.lessonCourseLessonId.eq(courseResult.id)
    );

    const lessonsSorted = lessons.sort(
      (a: Lesson, b: Lesson) => a.lessonNumber - b.lessonNumber
    );

    return { course: courseResult, lessons: lessonsSorted };
  }
  return null;
}

export async function getCourseContributors(
  context: GetStaticPropsContext & Context,
  filterFn: (rel: ContributorCourse) => boolean
): Promise<Contributor[]> {
  const { DataStore } = withSSRContext(context);

  const contributorCourses = await DataStore.query(ContributorCourse);
  const resolvedCourses = [];

  for (const contributorCourse of contributorCourses) {
    const id = await contributorCourse.id;
    const contributor = await contributorCourse.contributor;

    const course = await contributorCourse.course;
    resolvedCourses.push({id, contributor:contributor, course: course}); 
  }

  return resolvedCourses
    .filter(filterFn)
    .map((e: ContributorCourse) => e.contributor);
}

export async function getContributors(
  context: GetStaticPropsContext & Context
): Promise<Contributor[]> {
  const { DataStore } = withSSRContext(context);

  const contributors = await DataStore.query(Contributor);

  return contributors;
}
