import { Flex, Image, useBreakpointValue, Card } from "@aws-amplify/ui-react";
import { Course } from "../../models";
import { default as HeroLayout } from "../../ui-components/HeroLayoutCustom";
import styles from './HeroCourse.module.scss';

interface HeroCourseProps {
  course: Course;
}

export function HeroCourse({ course }: HeroCourseProps) {
  const heroLayoutVariant = useBreakpointValue({
    base: "mobile",
    small: "mobile ",
    medium: "default",
    large: "default",
  }) as "mobile" | "default";

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
        shrink="4"
        overrides={{
          "Frame 16": {
            width: "auto"
          },
          Button31473054: {
            width: "auto"
          },
          Button31473055: {
            width: "auto"
          }
        }}
      />
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
}
