import { View, Text } from "@aws-amplify/ui-react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function BreadcrumbLayout({
  breadcrumbCallback,
}: {
  breadcrumbCallback: (pathnameArray: string[], asPathArray: string[]) => any;
}) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);

  useEffect(() => {
    const pathnameArray = router.pathname.split("/");
    pathnameArray.shift();

    const asPathArray = router.asPath.split("/");
    asPathArray.shift();

    const result = breadcrumbCallback(pathnameArray, asPathArray);

    setBreadcrumbs(result);
  }, [router.pathname, router.asPath, breadcrumbCallback]);

  if (breadcrumbs?.length > 0) {
    return (
      <View padding="20px 32px" backgroundColor="#FFFFFF">
        <Breadcrumb>
          {breadcrumbs.map((e) => {
            if (e.label && e.href) {
              if (e.isCurrent) {
                return (
                  <BreadcrumbItem
                    key={e.href}
                    href={e.href}
                    isCurrent={e.isCurrent}
                  >
                    <Text key={e.href} color="#6d7576" aria-current="page">
                      {e.label}
                    </Text>
                  </BreadcrumbItem>
                );
              } else {
                return (
                  <BreadcrumbItem
                    key={e.href}
                    href={e.href}
                    isCurrent={e.isCurrent}
                  >
                    {e.label}
                  </BreadcrumbItem>
                );
              }
            }
          })}
        </Breadcrumb>
      </View>
    );
  } else {
    return <></>;
  }
}
