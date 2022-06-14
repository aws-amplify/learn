/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function ArrowRightIcon(props) {
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
          d: "M8.70711 -0.707107C8.31658 -1.09763 7.68342 -1.09763 7.29289 -0.707107C6.90237 -0.316583 6.90237 0.316583 7.29289 0.707107L8.70711 -0.707107ZM16 8L16.7071 8.70711L17.4142 8L16.7071 7.29289L16 8ZM7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L7.29289 15.2929ZM0 7C-0.552285 7 -1 7.44772 -1 8C-1 8.55229 -0.552285 9 0 9L0 7ZM7.29289 0.707107L15.2929 8.70711L16.7071 7.29289L8.70711 -0.707107L7.29289 0.707107ZM15.2929 7.29289L7.29289 15.2929L8.70711 16.7071L16.7071 8.70711L15.2929 7.29289ZM16 7L0 7L0 9L16 9L16 7Z",
          stroke: "rgba(84,91,100,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "ArrowRightIcon")}
    ></Icon>
  );
}
