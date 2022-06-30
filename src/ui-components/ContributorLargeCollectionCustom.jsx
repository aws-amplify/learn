/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Contributor } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ContributorLarge from "./ContributorLarge";
import ContributorVertical from "./ContributorVertical";
import { Collection, Card } from "@aws-amplify/ui-react";
export default function ContributorLargeCollectionCustom(props) {
  const {
    items: itemsProp,
    overrideItems,
    useLargeVariant,
    overrides,
    ...rest
  } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Contributor,
  }).items;
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
        <Card 
          key={item.id}
          borderRadius="16px"
          paddingTop={{
            base: "32px",
            small: "32px",
            medium: "48px",
            large: "48px",
            xl: "64px"
          }}
          paddingBottom="64px"
          variation="elevated">
          {useLargeVariant ? (
            <ContributorLarge
              contributor={item}
              {...(overrideItems && overrideItems({ item, index }))}
            ></ContributorLarge>
          ) : (
            <ContributorVertical
              contributor={item}
              {...(overrideItems && overrideItems({ item, index }))}
            ></ContributorVertical>
          )}
        </Card>
      )}
    </Collection>
  );
}
