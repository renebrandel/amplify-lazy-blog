/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Recipe } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipeUpdateFormInputValues = {
    name?: string;
};
export declare type RecipeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeUpdateFormOverridesProps = {
    RecipeUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipe?: Recipe;
    onSubmit?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onSuccess?: (fields: RecipeUpdateFormInputValues) => void;
    onError?: (fields: RecipeUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onValidate?: RecipeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeUpdateForm(props: RecipeUpdateFormProps): React.ReactElement;
