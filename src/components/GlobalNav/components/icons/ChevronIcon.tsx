import { Icon } from "@aws-amplify/ui-react";

export function ChevronDownIcon() {
  return (
    <Icon
      width="20"
      height="18"
      viewBox={{ minX: 2, minY: -1.5, width: 11, height: 12 }}
      paths={[
        {
          d: "M14.12 0.0599976L8 6.16667L1.88 0.0599976L0 1.94L8 9.94L16 1.94L14.12 0.0599976Z",
          fill: "#545B64",
        },
      ]}
      ariaLabel="Icon"
      fr={undefined}
    ></Icon>
  );
}

export function ChevronUpIcon() {
  return (
    <Icon
      width="20"
      height="18"
      viewBox={{ minX: 2.5, minY: -1.5, width: 11, height: 12 }}
      paths={[
        {
          d: "M14.12 0.0599976L8 6.16667L1.88 0.0599976L0 1.94L8 9.94L16 1.94L14.12 0.0599976Z",
          fill: "#545B64",
        },
      ]}
      ariaLabel="Icon"
      fr={undefined}
      style={{ transform: "rotate(180deg)" }}
    ></Icon>
  );
}
