import { Flex, View, Text, Button } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useCallback, useEffect, useState } from "react";
import { Lesson } from "../../models";
import { PlayIcon } from "../../ui-components";
import styles from "./LessonTableOfContents.module.scss";

// Maybe create a "Course" layout so that the table of contents can always be there?
export function LessonTableOfContents({ courseId }: { courseId: string }) {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  async function getLessons() {
    const result = await DataStore.query(Lesson, (l) =>
      l.lessonCourseLessonId("eq", courseId)
    );

    const sortedByLessons = result.sort(
      (a, b) => a.lessonNumber - b.lessonNumber
    );

    setLessons(sortedByLessons);
  }

  const getLessonsCallback = useCallback(getLessons, [courseId]);

  function createLessonTOC() {
    let chapter = 0;

    function closure(lesson: Lesson) {
      let result = [];

      if (chapter !== lesson.chapter) {
        // Found a new chapter so create the HTML for the chapter heading
        chapter = lesson.chapter as number;

        result.push(
          <View
            as="div"
            key={`chapter-${lesson.chapter}`}
            padding="12px 20px"
            className={chapter === 1 ? styles["first-chapter-heading"] : styles["chapter-heading"]}
          >
            <Text
              fontFamily="Amazon Ember Display"
              fontWeight={700}
              fontSize="0.875rem"
            >{`CHAPTER ${chapter}`}</Text>
          </View>
        );
      }

      result.push(
        <Button
          key={`lesson-${lesson.lessonNumber}`}
          variation="link"
          textAlign="left"
          gap="0.875rem"
          padding="8px 29px"
          className={styles["lesson-link"]}
        >
          <PlayIcon
            overrides={{
              PlayIcon: {
                color: "#0074BD",
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
          <Text fontWeight="700" fontSize="1rem">
            {lesson.title}
          </Text>
        </Button>
      );

      return result;
    }

    return closure;
  }

  useEffect(() => {
    getLessonsCallback();
  }, [getLessonsCallback]);

  useEffect(() => {
    console.log("sorted lessons: ", lessons);
  }, [lessons]);

  if (lessons.length > 0) {
    return ( 
      <Flex className={styles["lesson-toc"]} direction="column">
        {lessons.map(createLessonTOC())}
      </Flex>
    );
  }
  
  return <></>;
}
