import { withSSRContext } from "aws-amplify";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";
import { CourseOverview } from "../../../components/CourseOverview";
import { CoursesRouteLayout } from "../../../components/CoursesRouteLayout";
import { Course, Lesson } from "../../../models";

export default function CoursePage(data: any) {
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

export async function getServerSideProps(context: any) {
  const { DataStore } = withSSRContext(context);
  const { coursetitle } = context.query;

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
    };
  }

  return {
    notFound: true,
  };
}
