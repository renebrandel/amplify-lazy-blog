/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Ingredient } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function IngredientCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    quantity: undefined,
    unit: undefined,
    isValid: false,
    item: undefined,
  };
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [unit, setUnit] = React.useState(initialValues.unit);
  const [isValid, setIsValid] = React.useState(initialValues.isValid);
  const [item, setItem] = React.useState(initialValues.item);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuantity(initialValues.quantity);
    setUnit(initialValues.unit);
    setIsValid(initialValues.isValid);
    setItem(initialValues.item);
    setErrors({});
  };
  const validations = {
    quantity: [],
    unit: [],
    isValid: [],
    item: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          quantity,
          unit,
          isValid,
          item,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Ingredient(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "IngredientCreateForm")}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="Quantity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          onChange={(e) => {
            let value = Number(e.target.value);
            if (isNaN(value)) {
              setErrors((errors) => ({
                ...errors,
                quantity: "Value must be a valid number",
              }));
              return;
            }
            if (onChange) {
              const modelFields = {
                quantity: value,
                unit,
                isValid,
                item,
              };
              const result = onChange(modelFields);
              value = result?.quantity ?? value;
            }
            if (errors.quantity?.hasError) {
              runValidationTasks("quantity", value);
            }
            setQuantity(value);
          }}
          onBlur={() => runValidationTasks("quantity", quantity)}
          errorMessage={errors.quantity?.errorMessage}
          hasError={errors.quantity?.hasError}
          {...getOverrideProps(overrides, "quantity")}
        ></TextField>
        <SelectField
          label="Unit"
          placeholder="Please select an option"
          isDisabled={false}
          value={unit}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                quantity,
                unit: value,
                isValid,
                item,
              };
              const result = onChange(modelFields);
              value = result?.unit ?? value;
            }
            if (errors.unit?.hasError) {
              runValidationTasks("unit", value);
            }
            setUnit(value);
          }}
          onBlur={() => runValidationTasks("unit", unit)}
          errorMessage={errors.unit?.errorMessage}
          hasError={errors.unit?.hasError}
          {...getOverrideProps(overrides, "unit")}
        >
          <option
            children="Grams"
            value="GRAMS"
            {...getOverrideProps(overrides, "unitoption0")}
          ></option>
          <option
            children="Kilograms"
            value="KILOGRAMS"
            {...getOverrideProps(overrides, "unitoption1")}
          ></option>
          <option
            children="Ounces"
            value="OUNCES"
            {...getOverrideProps(overrides, "unitoption2")}
          ></option>
          <option
            children="Cups"
            value="CUPS"
            {...getOverrideProps(overrides, "unitoption3")}
          ></option>
        </SelectField>
      </Grid>
      <CheckboxField
        label="isValid"
        name="fieldName"
        value="fieldName"
        checked={isValid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              quantity,
              unit,
              isValid: value,
              item,
            };
            const result = onChange(modelFields);
            value = result?.isValid ?? value;
          }
          if (errors.isValid?.hasError) {
            runValidationTasks("isValid", value);
          }
          setIsValid(value);
        }}
        onBlur={() => runValidationTasks("isValid", isValid)}
        errorMessage={errors.isValid?.errorMessage}
        hasError={errors.isValid?.hasError}
        {...getOverrideProps(overrides, "isValid")}
      ></CheckboxField>
      <TextField
        label="Item"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quantity,
              unit,
              isValid,
              item: value,
            };
            const result = onChange(modelFields);
            value = result?.item ?? value;
          }
          if (errors.item?.hasError) {
            runValidationTasks("item", value);
          }
          setItem(value);
        }}
        onBlur={() => runValidationTasks("item", item)}
        errorMessage={errors.item?.errorMessage}
        hasError={errors.item?.hasError}
        {...getOverrideProps(overrides, "item")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
