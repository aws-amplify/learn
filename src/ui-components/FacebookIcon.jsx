/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function FacebookIcon(props) {
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
          d: "M9.60938 10.6875L10.1426 7.24895L6.8085 7.24895L6.8085 5.01756C6.8085 4.07684 7.27425 3.15986 8.7675 3.15986L10.2832 3.15986L10.2832 0.232305C10.2832 0.232305 8.90775 0 7.59263 0C4.84688 0 3.05213 1.64691 3.05213 4.62828L3.05213 7.24895L0 7.24895L0 10.6875L3.05213 10.6875L3.05213 19L6.8085 19L6.8085 10.6875L9.60938 10.6875Z",
          fill: "rgba(84,91,100,1)",
          fillRule: "nonzero",
          style: { transform: "translate(29.17%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "FacebookIcon")}
    ></Icon>
  );
}
