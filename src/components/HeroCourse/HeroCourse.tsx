import {
  Flex,
  Image,
  useBreakpointValue,
  Card,
  Placeholder,
} from "@aws-amplify/ui-react";
import { Course } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import { capitalizeEnum } from "../../utils/transformEnumsFromAmplify";
import { useState } from "react";
import { YoutubeModal } from "../YoutubeModal";

interface HeroCourseProps {
  course: Course | null;
}

export function HeroCourse({ course }: HeroCourseProps) {
  const heroLayoutVariant = useBreakpointValue({
    base: "mobile",
    small: "mobile ",
    medium: "default",
    large: "default",
  }) as "mobile" | "default";

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  if (course) {
    return (
      <Flex
        direction={{
          base: "column-reverse",
          small: "column-reverse",
          medium: "column-reverse",
          large: "row",
        }}
        alignItems="center"
        gap="20px"
      >
        <HeroLayout
          variation={heroLayoutVariant}
          course={course}
          shrink="10"
          overrides={{
            Advanced: {
              children: `${capitalizeEnum(course?.skillLevel as string)}`,
            },
            "Frame 16": {
              width: "auto",
            },
            Button31473054: {
              width: "auto",
            },
            Button31473055: {
              width: "auto",
              // Adding this because it expects onClick to be a string
              // @ts-ignore
              onClick: () => {
                setIsOpen(true);
              },
            },
          }}
        />
        {course.trailerEmbedId && (
          <YoutubeModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            courseTitle={course.title}
            courseTrailerEmbedId={course.trailerEmbedId}
          />
        )}
        {/* TODO: should images use srcset to handle responsive images? If so, would we need more than one image src? */}
        <Card>
          <Image
            src={course?.image || ""}
            alt={course?.imageAltText || ""}
            borderRadius="8px"
          />
        </Card>
      </Flex>
    );
  } else {
    return <Placeholder />;
  }
}
