import * as React from "react";
import { Icon } from "@aws-amplify/ui-react";

export const IconInfo = () => {
  return (
    <Icon
      aria-hidden="true"
      viewBox={{
        minX: 0,
        minY: 0,
        width: 24,
        height: 24,
      }}
    >
      <path
        d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
      />
    </Icon>
  );
};
