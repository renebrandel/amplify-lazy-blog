/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngredientCreateFormInputValues = {
    quantity?: number;
    unit?: string;
    isValid?: boolean;
    item?: string;
};
export declare type IngredientCreateFormValidationValues = {
    quantity?: ValidationFunction<number>;
    unit?: ValidationFunction<string>;
    isValid?: ValidationFunction<boolean>;
    item?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientCreateFormOverridesProps = {
    IngredientCreateFormGrid?: FormProps<GridProps>;
    RowGrid0?: FormProps<GridProps>;
    quantity?: FormProps<TextFieldProps>;
    unit?: FormProps<SelectFieldProps>;
    isValid?: FormProps<CheckboxFieldProps>;
    item?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientCreateFormProps = React.PropsWithChildren<{
    overrides?: IngredientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngredientCreateFormInputValues) => IngredientCreateFormInputValues;
    onSuccess?: (fields: IngredientCreateFormInputValues) => void;
    onError?: (fields: IngredientCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: IngredientCreateFormInputValues) => IngredientCreateFormInputValues;
    onValidate?: IngredientCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientCreateForm(props: IngredientCreateFormProps): React.ReactElement;
