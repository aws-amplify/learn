import { Placeholder } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { CourseOverview } from "../../../components/CourseOverview";
import { CoursesRouteLayout } from "../../../components/CoursesRouteLayout";
import { useFirstDatastoreQuery } from "../../../hooks/useFirstDatastoreQuery";
import { Course } from "../../../models";

const CoursePage = () => {
  const router = useRouter();
  const { coursetitle, id }: { coursetitle?: string; id?: string } =
    router.query;

  // Get the course title without the appended id
  const originalCourseTitle = coursetitle
    ?.substring(0, coursetitle?.lastIndexOf("-"))
    .replaceAll("-", " ");

  const [course, setCourse] = useState<Course | null>(null);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  async function getCourse() {
    let result;
    if (id) {
      result = await DataStore.query(Course, id);

      if (result) {
        setIsCourseLoaded(true);
        setCourse(result);
      }
    } else if (originalCourseTitle) {
      result = await DataStore.query(Course, (c) =>
        c.title("eq", originalCourseTitle)
      );

      if (result) {
        setIsCourseLoaded(true);
        setCourse(result[0]);
      }
    }
  }

  const getCourseCallback = useCallback(getCourse, [id, originalCourseTitle]);
  useFirstDatastoreQuery(getCourseCallback);

  useEffect(() => {
    getCourseCallback();
  }, [getCourseCallback]);

  if (course && course.id.length > 0) {
    return (
      <CoursesRouteLayout
        metaObject={{
          title: course.title ?? "",
          description: course.description ?? "",
          url: course.title ?? "",
        }}
      >
        {course?.id.length > 0 ? (
          <CourseOverview course={course} />
        ) : (
          <Placeholder isLoaded={isCourseLoaded} />
        )}
      </CoursesRouteLayout>
    );
  }

  return <Placeholder />;
};

export default CoursePage;
