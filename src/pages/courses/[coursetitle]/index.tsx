import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { CourseOverview } from "../../../components/CourseOverview";
import { CoursesRouteLayout } from "../../../components/CoursesRouteLayout";
import { Course, Lesson } from "../../../models";
import { createCourseTitleUri } from "../../../utils";
import { useRouter } from "next/router";
import { Fallback } from "../../../components/Fallback";

export default function CoursePage(data: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const course = deserializeModel(Course, data.course);
  const lessons = deserializeModel(Lesson, data.lessons);

  return (
    <CoursesRouteLayout
      metaObject={{
        title: course.title ?? "",
        description: course.description ?? "",
      }}
    >
      <CourseOverview course={course} lessons={lessons} />
    </CoursesRouteLayout>
  );
}

export async function getStaticPaths(context: any) {
  const { DataStore } = withSSRContext(context);
  const courses: Course[] = await DataStore.query(Course);

  return {
    paths: courses.map((course) => ({
      params: {
        coursetitle: createCourseTitleUri(course.title, course.id),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { DataStore } = withSSRContext(context);
  const { coursetitle: encodedCourseTitle } = context.params;

  const coursetitle = decodeURIComponent(encodedCourseTitle);

  // Get the course title without the appended id
  const originalCourseTitle = coursetitle
    ?.substring(0, coursetitle?.lastIndexOf("-"))
    .replace(/-/g, " ");

  // Get the course Id prefix
  const courseIdPrefix = coursetitle?.substring(
    coursetitle?.lastIndexOf("-") + 1,
    coursetitle.length
  );

  const courseResults: Course[] = await DataStore.query(Course, (c: any) =>
    c.id("beginsWith", courseIdPrefix).title("eq", originalCourseTitle)
  );

  const courseResult = courseResults[0];

  if (courseResult) {
    const lessons: Lesson[] = await DataStore.query(Lesson, (l: any) =>
      l.lessonCourseLessonId("eq", courseResult.id)
    );

    const lessonsSorted = lessons.sort(
      (a: Lesson, b: Lesson) => a.lessonNumber - b.lessonNumber
    );

    return {
      props: {
        course: serializeModel(courseResult),
        lessons: serializeModel(lessonsSorted),
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
}
