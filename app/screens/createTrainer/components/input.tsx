import { Controller, Control, FieldErrors } from "react-hook-form";

import * as S from "./styles";
import { TextInputProps } from "react-native";
import { SwimmingDataType } from "~/services/storage/swimmingData";

type InformationInputProps = {
  control: Control<SwimmingDataType>;
  name: keyof SwimmingDataType;
  placeholder?: string;
  errorMessage?: string;
  errors: FieldErrors<SwimmingDataType>;
} & TextInputProps;

export function InputInformation({
  control,
  name,
  placeholder,
  errorMessage,
  errors,
  keyboardType = "default",
}: InformationInputProps) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.Information
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString() || ""}
            placeholder={placeholder}
            placeholderTextColor="#1ea1f3"
            hasError={!!errors[name]}
            keyboardType={keyboardType}
          />
        )}
        name={name}
        rules={{ required: true }}
      />
      {errors[name] && (
        <S.InformationErrorMessage>{errorMessage}</S.InformationErrorMessage>
      )}
    </>
  );
}
