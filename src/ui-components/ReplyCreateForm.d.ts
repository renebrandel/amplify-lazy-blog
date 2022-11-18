/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReplyCreateFormInputValues = {
    content?: string;
};
export declare type ReplyCreateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReplyCreateFormOverridesProps = {
    ReplyCreateFormGrid?: FormProps<GridProps>;
    content?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReplyCreateFormProps = React.PropsWithChildren<{
    overrides?: ReplyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReplyCreateFormInputValues) => ReplyCreateFormInputValues;
    onSuccess?: (fields: ReplyCreateFormInputValues) => void;
    onError?: (fields: ReplyCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReplyCreateFormInputValues) => ReplyCreateFormInputValues;
    onValidate?: ReplyCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReplyCreateForm(props: ReplyCreateFormProps): React.ReactElement;
