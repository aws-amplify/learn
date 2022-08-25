import { Flex, View, Text, Icon } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { Lesson } from "../../models";
import { PlayIcon } from "../../ui-components";
import Link from "next/link";
import styles from "./LessonTableOfContents.module.scss";

// Maybe create a "Course" layout so that the table of contents can always be there?
export function LessonTableOfContents({
  lessons,
  currentLesson,
}: {
  lessons: Lesson[];
  currentLesson?: string;
}) {
  const router = useRouter();

  // Helper function to create the table of contents
  function createLessonTOC() {
    let chapter = 0;

    // Create a closure so we have access to the "chapter" variable
    function closure(lesson: Lesson) {
      let result = [];

      if (chapter !== lesson.chapter) {
        // Found a new chapter so create the HTML for the chapter heading
        chapter = lesson.chapter as number;

        result.push(
          <View
            key={`chapter-${lesson.chapter}`}
            padding="12px 20px"
            className={
              chapter === 1
                ? styles["first-chapter-heading"]
                : styles["chapter-heading"]
            }
          >
            <Text
              fontFamily="Amazon Ember Display"
              fontWeight={700}
              fontSize="0.875rem"
            >{`CHAPTER ${chapter}`}</Text>
          </View>
        );
      }

      const pathname =
        router.pathname.indexOf("lessons") > -1
          ? router.pathname
          : `${router.pathname}/lessons/[lesson]`;

      const asPath =
        router.asPath.indexOf("lessons") > -1
          ? `${router.asPath.substring(0, router.asPath.lastIndexOf("/"))}/${
              lesson.lessonNumber
            }`
          : `${router.asPath}/lessons/${lesson.lessonNumber}`;

      result.push(
        <View key={`lesson-${lesson.lessonNumber}`} padding="0px 8px">
          <Link
            href={{
              pathname: pathname,
            }}
            as={asPath}
          >
            <a style={{ textDecoration: "none" }}>
              <Flex
                ariaLabel={`Go to lesson ${lesson.lessonNumber}, ${lesson.title}`}
                textAlign="left"
                columnGap="0.875rem"
                padding="8px 12px"
                borderRadius="4px"
                alignItems="center"
                className={`${styles["lesson-link"]} ${
                  Number(currentLesson) === lesson.lessonNumber
                    ? styles["current-lesson"]
                    : ""
                }`}
              >
                {Number(currentLesson) === lesson.lessonNumber ? (
                  <Icon
                    width="18px"
                    height="24px"
                    ariaLabel="Current lesson icon"
                    fr={undefined}
                    viewBox={{ minX: 2.5, minY: 0, width: 13, height: 11 }}
                  >
                    <rect
                      x="3"
                      y="0.666672"
                      width="4"
                      height="11"
                      rx="1"
                      fill="white"
                    />
                    <rect
                      x="10"
                      y="0.666672"
                      width="4"
                      height="11"
                      rx="1"
                      fill="white"
                    />
                  </Icon>
                ) : (
                  <PlayIcon
                    overrides={{
                      PlayIcon: {
                        color:
                          Number(currentLesson) === lesson.lessonNumber
                            ? "white"
                            : "#0074BD",
                        width: "16px",
                        // @ts-ignore
                        viewBox: {
                          minX: 2.2,
                          minY: 0,
                          width: 16,
                          height: 24,
                        },
                        // @ts-ignore
                        paths: [
                          {
                            d: "M0 0L0.5547 -0.83205C0.247844 -1.03662 -0.1467 -1.05569 -0.471858 -0.881675C-0.797015 -0.707656 -1 -0.368795 -1 -1.84752e-16L0 0ZM12 8L12.5547 8.83205C12.8329 8.64658 13 8.33435 13 8C13 7.66565 12.8329 7.35342 12.5547 7.16795L12 8ZM0 16L-1 16C-1 16.3688 -0.797015 16.7077 -0.471858 16.8817C-0.1467 17.0557 0.247844 17.0366 0.5547 16.8321L0 16ZM-0.5547 0.83205L11.4453 8.83205L12.5547 7.16795L0.5547 -0.83205L-0.5547 0.83205ZM11.4453 7.16795L-0.5547 15.1679L0.5547 16.8321L12.5547 8.83205L11.4453 7.16795ZM1 16L1 0L-1 0L-1 16L1 16Z",
                            fillRule: "nonzero",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            style: { transform: "translate(29.17%, 16.67%)" },
                          },
                        ],
                      },
                    }}
                  />
                )}
                <Text fontWeight="700" fontSize="1rem">
                  {lesson.title}
                </Text>
              </Flex>
            </a>
          </Link>
        </View>
      );

      return result;
    }

    return closure;
  }

  if (lessons.length > 0) {
    return (
      <Flex
        className={styles["lesson-toc"]}
        direction="column"
        ariaLabel="Lesson Table of Contents"
      >
        {lessons.map(createLessonTOC())}
      </Flex>
    );
  }

  return <></>;
}
