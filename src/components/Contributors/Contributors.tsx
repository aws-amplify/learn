import { useBreakpointValue } from "@aws-amplify/ui-react";
import { default as ContributorsLargeCollectionCustom } from "../../ui-components/ContributorLargeCollectionCustom";

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
    <ContributorsLargeCollectionCustom
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
