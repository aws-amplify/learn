// Custom ExternalIcon

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type ExternalIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ExternalIcon(props: ExternalIconProps): React.ReactElement;
