import { Placeholder } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { CourseOverview } from "../../components/CourseOverview";
import { Layout } from "../../components/Layout";
import { useFirstDatastoreQuery } from "../../hooks/useFirstDatastoreQuery";
import { Contributor, ContributorCourse, Course } from "../../models";

const CoursePage = () => {
  const router = useRouter();
  const { coursetitle, id }: { coursetitle?: string; id?: string } =
    router.query;
  const originalCourseTitle = coursetitle?.replaceAll("-", " ");

  const [course, setCourse] = useState<Course>({ id: "" });
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  async function getCourse() {
    let result;
    if (id) {
      result = await DataStore.query(Course, id);

      if (result) {
        setIsCourseLoaded(true);
        setCourse(result);
      }
    }

    if (originalCourseTitle) {
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

  const [contributors, setContributors] = useState<Contributor[]>([]);

  async function getCourseContributors() {
    if (course?.id) {
      const contributorCourses = await DataStore.query(ContributorCourse);

      const result = contributorCourses.filter(
        (rel) => rel.course.id === course.id
      );

      setContributors(result.map((e) => e.contributor));
    }
  }

  const getCourseContributorsCallback = useCallback(getCourseContributors, [
    course?.id,
  ]);

  useEffect(() => {
    getCourseContributorsCallback();
  }, [getCourseContributorsCallback]);

  return (
    <Layout>
      {course?.id.length > 0 && contributors.length > 0 ? (
        <CourseOverview course={course} contributors={contributors} />
      ) : (
        <Placeholder isLoaded={isCourseLoaded} />
      )}
    </Layout>
  );
};

export default CoursePage;
