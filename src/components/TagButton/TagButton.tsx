import { useBreakpointValue } from "@aws-amplify/ui-react";
import Link from "next/link";
import { Tag } from "../../models";

export function TagButton({
  tag,
  inCourseLayout,
}: {
  tag: Tag;
  inCourseLayout: boolean;
}) {
  const tagButtonPadding = useBreakpointValue({
    base: "24px 32px",
    small: "24px 32px",
    medium: "32px 48px",
  }) as string;

  // Trying to make an <a> tag look like a button
  const inCourseClasses =
    "amplify-button amplify-field-group__control amplify-button--link amplify-button--small tag-button";

  return (
    <Link
      href={{
        pathname: "/learn/tags/[tagname]",
      }}
      as={`/learn/tags/${tag.name}`}
    >
      <a
        target="_blank"
        className={inCourseLayout ? inCourseClasses : `amplify-button`}
        style={
          !inCourseLayout
            ? {
                color: "#0074bd",
                padding: tagButtonPadding,
              }
            : {}
        }
      >{`#${tag.name}`}</a>
    </Link>
  );
}
