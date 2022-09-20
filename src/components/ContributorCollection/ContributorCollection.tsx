import React from "react";
import { Contributor } from "../../models";
import ContributorLargeCustom from "./ContributorComponents/ContributorLargeCustom";
import ContributorVerticalCustom from "./ContributorComponents/ContributorVerticalCustom";
import { Collection, Card, CollectionProps } from "@aws-amplify/ui-react";
import styles from "./ContributorCollection.module.scss";
import Link from "next/link";

export declare type ContributorCollectionProps = React.PropsWithChildren<
  Partial<CollectionProps<any>> & {
    contributors: Contributor[];
  } & {
    useLargeVariant?: boolean;
  } & {
    filter?: (e: Contributor) => boolean;
  } & {
    limit?: number;
  }
>;

export function ContributorCollection({
  contributors,
  useLargeVariant,
  filter,
  limit,
  ...rest
}: ContributorCollectionProps) {
  let items = [...contributors];

  if (filter) {
    items = items.filter(filter);
  }

  if (limit && contributors.length > limit) {
    items.splice(limit, items.length - limit);
  }

  return (
    <Collection type="grid" items={items} {...rest}>
      {(item, index) => (
        <Link
          key={item.id}
          href={{
            pathname: "/learn/about/[contributor]",
          }}
          as={`/learn/about/${item.username}`}
        >
          <a className={styles["contributor-card-hyperlink"]}>
            <Card
              className={styles["contributor-card"]}
              borderRadius="16px"
              paddingTop={{
                base: "32px",
                small: "32px",
                medium: "48px",
                large: "48px",
                xl: "64px",
              }}
              paddingBottom={{
                base: "32px",
                small: "32px",
                medium: "48px",
                large: "48px",
                xl: "64px",
              }}
              variation="elevated"
            >
              {useLargeVariant ? (
                <ContributorLargeCustom
                  contributor={item}
                ></ContributorLargeCustom>
              ) : (
                <ContributorVerticalCustom
                  contributor={item}
                ></ContributorVerticalCustom>
              )}
            </Card>
          </a>
        </Link>
      )}
    </Collection>
  );
}
