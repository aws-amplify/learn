import {
  Flex,
  Image,
  useBreakpointValue,
  Placeholder,
  View,
} from "@aws-amplify/ui-react";
import { Course, Tag } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import { capitalizeEnum } from "../../utils/capitalizeEnum";
import { useState } from "react";
import { YoutubeModal } from "../YoutubeModal";

interface HeroCourseProps {
  course: Course;
  tags: Tag[];
}

export function HeroCourse({ course, tags }: HeroCourseProps) {
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
        gap="40px"
      >
        <HeroLayout
          variation={heroLayoutVariant}
          course={course}
          tags={tags}
          shrink="1.5"
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
        <View
          width="100%"
          height={{
            base: "240px",
            small: "240px",
            medium: "280px",
            large: "368px",
          }}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            src={course.image}
            alt={course.imageAltText}
            borderRadius="8px"
            overflow="hidden"
          />
        </View>
      </Flex>
    );
  } else {
    return <Placeholder />;
  }
}
