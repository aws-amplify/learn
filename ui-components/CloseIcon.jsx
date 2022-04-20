/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function CloseIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CloseIcon")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="16px"
        height="16px"
        position="absolute"
        top="0.69px"
        left="12px"
        transformOrigin="top left"
        transform="rotate(45deg)"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <Icon
          width="11.3134765625px"
          height="11.313720703125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 11.3134765625,
            height: 11.313720703125,
          }}
          paths={[
            {
              d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
              stroke: "rgba(84,91,100,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="50%"
          right="50%"
          {...getOverrideProps(overrides, "Vector 3")}
        ></Icon>
        <Icon
          width="11.3134765625px"
          height="11.313720703125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 11.3134765625,
            height: 11.313720703125,
          }}
          paths={[
            {
              d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 16C-1 16.5523 -0.552285 17 0 17C0.552285 17 1 16.5523 1 16L-1 16ZM-1 0L-1 16L1 16L1 0L-1 0Z",
              stroke: "rgba(84,91,100,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="50%"
          bottom="-50%"
          left="0%"
          right="100%"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          {...getOverrideProps(overrides, "Vector 4")}
        ></Icon>
      </View>
    </View>
  );
}
