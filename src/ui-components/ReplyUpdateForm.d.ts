/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Reply } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReplyUpdateFormInputValues = {
    content?: string;
};
export declare type ReplyUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReplyUpdateFormOverridesProps = {
    ReplyUpdateFormGrid?: FormProps<GridProps>;
    content?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReplyUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReplyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reply?: Reply;
    onSubmit?: (fields: ReplyUpdateFormInputValues) => ReplyUpdateFormInputValues;
    onSuccess?: (fields: ReplyUpdateFormInputValues) => void;
    onError?: (fields: ReplyUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReplyUpdateFormInputValues) => ReplyUpdateFormInputValues;
    onValidate?: ReplyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReplyUpdateForm(props: ReplyUpdateFormProps): React.ReactElement;
