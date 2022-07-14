import { Flex, Icon } from "@aws-amplify/ui-react";
import Link from "next/link";
import { Children, Fragment, ReactNode } from "react";
import styles from "./BreadcrumbLayout.module.scss";

export function BreadcrumbItem({
  children,
  href,
  isCurrent,
}: {
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
}) {
  return (
    <Link href={href}>
      <a
        className={`${styles['breadcrumb']} ${isCurrent ? styles["current"] : ""}`}
        aria-current={isCurrent ? "page" : "false"}
      >
        {children}
      </a>
    </Link>
  );
}

export function Breadcrumb({ children }: { children: ReactNode }) {
  const childrenArray = Children.toArray(children);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment>
          {child}
          <Icon
            ariaLabel="Breadcrumb separator"
            viewBox={{ width: 16, height: 16 }}
          >
            <path
              d="M5.33301 2.6665L10.6663 7.99984L5.33301 13.3332"
              stroke="#A9B6B7"
              stroke-width="1.5"
              stroke-linecap="round"
              fill="none"
            />
          </Icon>
        </Fragment>
      );
    }

    return child;
  });

  return (
    <Flex direction="row" alignItems="center">
      {childrenWithSeparator}
    </Flex>
  );
}
