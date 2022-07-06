import { useBreakpointValue } from "@aws-amplify/ui-react";
import { default as ContributorCollection } from "./ContributorCollection";

export function Contributors() {
  const collectionVariant = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "grid",
    large: "grid",
  }) as "grid" | "list";

  const useLargeVariant = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: false,
    xl: true
  }) as boolean;

  return (
    <ContributorCollection
      type={collectionVariant}
      gap="20px"
      useLargeVariant={useLargeVariant}
      templateColumns={{
        base: "1fr",
        small: "1fr",
        medium: "1fr 1fr",
        large: "1fr 1fr",
        xl: "1fr 1fr 1fr",
      }}
    />
  );
}
