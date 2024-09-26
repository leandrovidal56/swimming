import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

const formatTime = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 4) {
    return cleaned.replace(/(\d{2})(\d{2})/, "$1:$2");
  } else {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
  }
};

export const InputTime = ({
  control,
  name,
  placeholder,
  errorMessage,
  errors,
}: any) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <View>
        <TextInput
          placeholder={placeholder}
          keyboardType="numeric"
          value={formatTime(value)}
          onChangeText={(text) => onChange(text)}
        />
        {errors[name] && <Text>{errorMessage}</Text>}
      </View>
    )}
  />
);
