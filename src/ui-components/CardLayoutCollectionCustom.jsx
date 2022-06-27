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
import CardLayout from "./CardLayoutCustom";
import { Collection } from "@aws-amplify/ui-react";
export default function CardLayoutCollection(props) {
  const {
    items: itemsProp,
    isOnHomePage,
    overrideItems,
    overrides,
    ...rest
  } = props;
  const itemsPagination = {
    sort: (s) => s.dateCreated(SortDirection.DESCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Course,
    pagination: itemsPagination,
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
