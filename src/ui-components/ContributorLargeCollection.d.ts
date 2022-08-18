/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContributorLargeProps } from "./ContributorLarge";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type ContributorLargeCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ContributorLargeProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ContributorLargeCollection(props: ContributorLargeCollectionProps): React.ReactElement;
