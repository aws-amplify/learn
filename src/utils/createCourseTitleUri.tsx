const COURSE_ID_PREFIX_LENGTH = 5;

/**
 * Helper function to create the [coursetitle] path using the course.title and course.id.
 * @param courseTitle {string} The course title.
 * @param courseId {string} The Course ID.
 * @returns {string} The modified string representing the coursetitle.
 */
export function createCourseTitleUri(
  courseTitle: string,
  courseId: string
): string {
  const courseTitleWithDashes = courseTitle.replace(/ /g, "-");
  const courseIdPrefix = courseId.substring(0, COURSE_ID_PREFIX_LENGTH);

  return encodeURIComponent(`${courseTitleWithDashes}-${courseIdPrefix}`);
}
