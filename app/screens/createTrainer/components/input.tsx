import { Controller, Control, FieldErrors } from "react-hook-form";

import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { SwimmingDataType } from "~/services/storage/swimmingData";
import { Text } from "~/components/text";

type InputProps = {
  control: Control<SwimmingDataType>;
  name: keyof SwimmingDataType;
  placeholder?: string;
  errorMessage?: string;
  errors: FieldErrors<SwimmingDataType>;
} & TextInputProps;

export function Input({
  control,
  name,
  placeholder,
  errorMessage,
  errors,
  keyboardType = "default",
}: InputProps) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Container
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
      {errors[name] && <Text hasError size="3-5" message={errorMessage} />}
    </>
  );
}
