/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Contributor } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ContributorHorizontalProps = React.PropsWithChildren<Partial<FlexProps> & {
    contributor?: Contributor;
} & {
    property1?: "Horizontal";
    property2?: "Regular";
    property3?: "false" | "true";
    property4?: "false" | "true";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ContributorHorizontal(props: ContributorHorizontalProps): React.ReactElement;
