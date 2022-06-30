import Link from "next/link";
import { Tag } from "../../models";
import styles from "./TagButton.module.scss";

export function TagButton({
  tag,
  inCourseLayout,
}: {
  tag: Tag;
  inCourseLayout: boolean;
}) {
  const inCourseClasses =
    "amplify-button amplify-field-group__control amplify-button--link amplify-button--small tag-button";
  const defaultClasses = `amplify-button ${styles["tag-button"]}`;

  return (
    <Link
      href={{
        pathname: "/tags/[tagname]",
        query: {
          id: tag.id,
        },
      }}
      as={`/tags/${tag.name}`}
    >
      <a
        className={inCourseLayout ? inCourseClasses : defaultClasses}
      >{`#${tag.name}`}</a>
    </Link>
  );
}
