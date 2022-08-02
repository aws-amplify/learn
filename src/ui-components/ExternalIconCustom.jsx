// Custom ExternalIcon
// Removed the "stroke" property that was being generated by Figma so that it matches designs better

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ExternalIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="22px"
      height="21px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ExternalIcon")}
    >
      <View
        width="21.32px"
        height="20.66px"
        position="absolute"
        top="0.34px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 404")}
      >
        <Icon
          width="15.31591796875px"
          height="15.31640625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.31591796875,
            height: 15.31640625,
          }}
          paths={[
            {
              d: "M6.12212 -0.707106C5.7316 -1.09763 5.09843 -1.09763 4.70791 -0.707108C4.31738 -0.316584 4.31738 0.316581 4.70791 0.707106L6.12212 -0.707106ZM10.83 5.415L11.5371 6.12211L12.2442 5.415L11.5371 4.70789L10.83 5.415ZM4.70791 10.1229C4.31738 10.5134 4.31738 11.1466 4.70791 11.5371C5.09843 11.9276 5.7316 11.9276 6.12212 11.5371L4.70791 10.1229ZM1.33085e-05 4.415C-0.552271 4.415 -0.999987 4.86272 -0.999987 5.415C-0.999987 5.96728 -0.552271 6.415 1.33085e-05 6.415L1.33085e-05 4.415ZM4.70791 0.707106L10.1229 6.12211L11.5371 4.70789L6.12212 -0.707106L4.70791 0.707106ZM10.1229 4.70789L4.70791 10.1229L6.12212 11.5371L11.5371 6.12211L10.1229 4.70789ZM10.83 4.415L1.33085e-05 4.415L1.33085e-05 6.415L10.83 6.415L10.83 4.415Z",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="37.07%"
          bottom="10.5%"
          left="28.15%"
          right="21.04%"
          transformOrigin="top left"
          transform="rotate(-45deg)"
          {...getOverrideProps(overrides, "Vector 2")}
        ></Icon>
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M17 11.6364C17 11.0841 16.5523 10.6364 16 10.6364C15.4477 10.6364 15 11.0841 15 11.6364L17 11.6364ZM4.36364 1C4.91592 1 5.36364 0.552285 5.36364 0C5.36364 -0.552285 4.91592 -1 4.36364 -1L4.36364 1ZM15 11.6364L15 13.0909L17 13.0909L17 11.6364L15 11.6364ZM13.0909 15L2.90909 15L2.90909 17L13.0909 17L13.0909 15ZM2.90909 15C1.85473 15 1 14.1453 1 13.0909L-1 13.0909C-1 15.2498 0.75016 17 2.90909 17L2.90909 15ZM15 13.0909C15 14.1453 14.1453 15 13.0909 15L13.0909 17C15.2498 17 17 15.2498 17 13.0909L15 13.0909ZM2.90909 1L4.36364 1L4.36364 -1L2.90909 -1L2.90909 1ZM1 2.90909C1 1.85473 1.85473 1 2.90909 1L2.90909 -1C0.75016 -1 -1 0.75016 -1 2.90909L1 2.90909ZM1 13.0909L1 2.90909L-1 2.90909L-1 13.0909L1 13.0909Z",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="17.71%"
          bottom="4.84%"
          left="4.69%"
          right="20.25%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
