import { Flex } from "@aws-amplify/ui-react";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { Course } from "../../models";
import { HeroCourse } from "../HeroCourse";

export function HomePageContent({ heroCourse }: { heroCourse: Course }) {
  return (
    <Flex
      direction="column"
      gap={{
        base: "64px",
        small: "64px",
        medium: "64px",
        large: "124px",
      }}
    >
      <HeroCourse course={heroCourse} />
      <CardLayoutCollection
        gap="40px"
        isOnHomePage={true}
        filter={(element: Course) => element.isFeatured === false}
        isPaginated={false}
        limit={4}
      />
    </Flex>
  );
}
