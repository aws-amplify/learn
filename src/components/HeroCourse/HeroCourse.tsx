import {
  Flex,
  useBreakpointValue,
  Card,
  Placeholder,
  View,
} from "@aws-amplify/ui-react";
import { Course } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import { capitalizeEnum } from "../../utils/capitalizeEnum";
import { useState } from "react";
import { YoutubeModal } from "../YoutubeModal";
import Image from "next/image";

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
          shrink={{
            base: "1",
            small: "1",
            medium: "1",
            large: "2",
            xl: "5",
          }}
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
        {course.image && (
          <Card>
            <Flex
              shrink="0"
              position="relative"
              overflow="hidden"
              borderRadius="8px"
            >
              <Image
                src={course.image}
                alt={course?.imageAltText || `Photo for course ${course.title}`}
                height="368px"
                width="580px"
                layout="intrinsic"
                quality={100}
                priority={true}
              />
            </Flex>
          </Card>
        )}
      </Flex>
    );
  } else {
    return <Placeholder />;
  }
}
