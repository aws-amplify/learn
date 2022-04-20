/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function PlayIcon(props) {
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
          d: "M0 0L0.5547 -0.83205C0.247844 -1.03662 -0.1467 -1.05569 -0.471858 -0.881675C-0.797015 -0.707656 -1 -0.368795 -1 -1.84752e-16L0 0ZM12 8L12.5547 8.83205C12.8329 8.64658 13 8.33435 13 8C13 7.66565 12.8329 7.35342 12.5547 7.16795L12 8ZM0 16L-1 16C-1 16.3688 -0.797015 16.7077 -0.471858 16.8817C-0.1467 17.0557 0.247844 17.0366 0.5547 16.8321L0 16ZM-0.5547 0.83205L11.4453 8.83205L12.5547 7.16795L0.5547 -0.83205L-0.5547 0.83205ZM11.4453 7.16795L-0.5547 15.1679L0.5547 16.8321L12.5547 8.83205L11.4453 7.16795ZM1 16L1 0L-1 0L-1 16L1 16Z",
          stroke: "rgba(84,91,100,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 2,
          style: { transform: "translate(29.17%, 16.67%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "PlayIcon")}
    ></Icon>
  );
}
