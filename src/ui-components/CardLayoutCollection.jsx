/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Course } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardLayout from "./CardLayout";
import { Collection } from "@aws-amplify/ui-react";
export default function CardLayoutCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Course,
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
          height="548px"
          width="582px"
          margin="0 19px 20px 0"
          course={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardLayout>
      )}
    </Collection>
  );
}
