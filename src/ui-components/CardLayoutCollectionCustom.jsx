/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Course } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { CardLayout } from "../components/CardLayout/";
import { Collection, useBreakpointValue } from "@aws-amplify/ui-react";
export default function CardLayoutCollection(props) {
  const {
    items: itemsProp,
    isOnHomePage,
    filter: filterCallback,
    limit,
    overrideItems,
    overrides,
    ...rest
  } = props;
  const itemsPagination = {
    sort: (s) => s.dateCreated(SortDirection.DESCENDING),
  };
  let itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Course,
    pagination: itemsPagination,
  }).items;

  if (filterCallback) {
    itemsDataStore = itemsDataStore.filter(filterCallback);
  }

  if (limit) {
    itemsDataStore.splice(limit, itemsDataStore.length - limit);
  }

  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;

  const cardLayoutCollectionVariant = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "list",
    large: "grid",
  });

  return (
    <Collection
      type={cardLayoutCollectionVariant}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CardLayoutCollection")}
    >
      {(item, index) => (
        <CardLayout
          isOnHomePage={isOnHomePage}
          height="auto"
          width="auto"
          margin="0 0px 0px 0"
          course={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardLayout>
      )}
    </Collection>
  );
}
