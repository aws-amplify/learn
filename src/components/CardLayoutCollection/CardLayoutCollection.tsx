import {
  Collection,
  CollectionProps,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { CardLayoutData } from "../../types";
import { CardLayout } from "../CardLayout";

declare type CardLayoutCollectionProps = React.PropsWithChildren<
  Partial<CollectionProps<any>> & {
    cardLayouts: CardLayoutData[];
  } & {
    isOnHomePage?: boolean;
  } & {
    filter?: any;
  } & {
    limit?: number;
  }
>;

export function CardLayoutCollection({
  cardLayouts,
  isOnHomePage,
  filter,
  limit,
  ...rest
}: CardLayoutCollectionProps): React.ReactElement {
  const collectionType = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "list",
    large: "grid",
  }) as "grid" | "list";

  let items = [...cardLayouts];

  if (filter) {
    items = items.filter(filter);
  }

  if (limit && cardLayouts.length > limit) {
    items.splice(limit, items.length - limit);
  }

  return (
    <Collection type={collectionType} items={items || []} {...rest}>
      {(item: CardLayoutData) => (
        <CardLayout
          isOnHomePage={isOnHomePage}
          height="auto"
          width="auto"
          course={item.course}
          tags={item.tags}
          key={item.course.id}
        ></CardLayout>
      )}
    </Collection>
  );
}
