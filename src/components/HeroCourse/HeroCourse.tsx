import { Flex, Image, useBreakpointValue, Card } from "@aws-amplify/ui-react";
import { Course } from "../../models";
import { HeroLayout } from "../../ui-components";

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
