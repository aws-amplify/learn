import { ReactNode, useCallback } from "react";
import { MetaInfo } from "../../types/models";
import { Layout } from "../Layout";

export function CoursesRouteLayout({
  children,
  metaInfo,
}: {
  children: ReactNode;
  metaInfo: MetaInfo;
}) {
  function coursesBreadcrumbCallback(
    pathnameArray: string[],
    asPathArray: string[]
  ) {
    if (pathnameArray.length === asPathArray.length) {
      const breadcrumbs = pathnameArray.map((path, index) => {
        const result = {
          href: "",
          label: "",
          isCurrent: index === pathnameArray.length - 1,
        };

        result["href"] = "/" + asPathArray.slice(0, index + 1).join("/");

        if (path === "courses") {
          result["label"] = "All courses";
        } else if (path === "[coursetitle]") {
          result["label"] = "Overview";
        } else if (path === "[lesson]") {
          result["label"] = "Lesson";
        }

        return result;
      });

      return breadcrumbs;
    }
  }

  const callback = useCallback(coursesBreadcrumbCallback, []);

  return (
    <Layout
      metaInfo={metaInfo}
      showBreadcrumb={true}
      breadcrumbCallback={callback}
    >
      {children}
    </Layout>
  );
}
