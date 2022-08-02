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
        base: "32px",
        small: "32px",
        medium: "32px",
        large: "200px",
      }}
      justifyContent="space-between"
    >
      {children}
    </Flex>
  );
}
