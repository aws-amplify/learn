/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function TwitchIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M13.6139 3.83971L12.1804 3.83971L12.1804 7.91061L13.6139 7.91061L13.6139 3.83971ZM9.67404 3.82227L8.24051 3.82227L8.24051 7.89502L9.67404 7.89502L9.67404 3.82227ZM3.5818 0L0 3.39254L0 15.6075L4.29838 15.6075L4.29838 19L7.88055 15.6075L10.7472 15.6075L17.1957 9.5L17.1957 0L3.5818 0ZM15.7626 8.82275L12.897 11.5362L10.0307 11.5362L7.52207 13.9112L7.52207 11.5362L4.29838 11.5362L4.29838 1.35746L15.7626 1.35746L15.7626 8.82275Z",
          fill: "rgba(84,91,100,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "TwitchIcon")}
    ></Icon>
  );
}
