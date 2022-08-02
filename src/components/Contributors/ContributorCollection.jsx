import React from "react";
import { Contributor } from "../../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ContributorLargeCustom from "./ContributorLargeCustom";
import ContributorVerticalCustom from "./ContributorVerticalCustom";
import { Collection, Card } from "@aws-amplify/ui-react";
import styles from "./ContributorCollection.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ContributorCollection(props) {
  const router = useRouter();
  const {
    items: itemsProp,
    overrideItems,
    useLargeVariant,
    filter: filterCallback,
    limit,
    overrides,
    ...rest
  } = props;
  let itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Contributor,
  }).items;

  if (filterCallback) {
    itemsDataStore = itemsDataStore.filter(filterCallback);
  }

  if (limit) {
    itemsDataStore.splice(limit, itemsDataStore.length - limit);
  }

  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ContributorLargeCollection")}
    >
      {(item, index) => (
        <Link
          key={item.id}
          href={{
            pathname: "/about/[contributor]",
            query: { id: item.id },
          }}
          as={`/about/${item.username}`}
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
                  {...(overrideItems && overrideItems({ item, index }))}
                ></ContributorLargeCustom>
              ) : (
                <ContributorVerticalCustom
                  contributor={item}
                  {...(overrideItems && overrideItems({ item, index }))}
                ></ContributorVerticalCustom>
              )}
            </Card>
          </a>
        </Link>
      )}
    </Collection>
  );
}
