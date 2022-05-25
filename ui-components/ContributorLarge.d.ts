/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ContributorLargeProps = React.PropsWithChildren<Partial<FlexProps> & {
    image?: String;
    name?: String;
    roleTitle?: String;
} & {
    property1?: "Vertical";
    property2?: "Large";
    property3?: "false" | "true";
    property4?: "false" | "true";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ContributorLarge(props: ContributorLargeProps): React.ReactElement;
