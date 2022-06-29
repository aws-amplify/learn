import { Flex } from "@aws-amplify/ui-react";

export function ActionLayout({ children }: { children: any }) {
  return (
    <Flex
      direction={{
        base: "column",
        small: "column",
        medium: "column",
        large: "row",
      }}
      marginTop="128px"
      alignItems={{
        base: "flex-start",
        small: "flex-start",
        medium: "flex-start",
        large: "center",
      }}
      columnStart="2"
      gap={{
        base: "0px",
        small: "0px",
        medium: "0px",
        large: "200px",
      }}
    >
      {children}
    </Flex>
  );
}
