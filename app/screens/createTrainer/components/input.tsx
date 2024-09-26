import { useState } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import * as S from "./styles";
import {
  TextInputProps,
  Button,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { SwimmingDataType } from "~/services/storage/swimmingData";

// Tipos de propriedades do input
type InformationInputProps = {
  control: Control<SwimmingDataType>;
  name: keyof SwimmingDataType;
  placeholder?: string;
  errorMessage?: string;
  errors: FieldErrors<SwimmingDataType>;
  maskType?: "time" | "distance" | "date"; // Adicionando "date" para a máscara de data
} & TextInputProps;
export const maskTime = (value: string) => {
  const cleaned = value.replace(/\D/g, ""); // Remove tudo que não for dígito
  return cleaned.replace(/(\d{2})(\d{2})/, "$1:$2"); // Formato minutos:segundos
};

export const maskDistance = (value: string, short: boolean) => {
  // const cleaned = value.replace(/\D/g, "");
  // if (cleaned === "") return "";

  // if (cleaned.length <= 3) {
  //   return `${cleaned}m`;
  // } else {
  //   const km = cleaned.slice(0, cleaned.length - 3);
  //   const m = cleaned.slice(cleaned.length - 3);
  //   return `${km}.${m}km`;
  // }
  const cleaned = value.replace(/\D/g, "");
  if (cleaned === "") return "";

  if (cleaned.length <= 3) {
    return `${cleaned}m`; // Se houver até 3 números, retorna metros
  } else if (cleaned.length === 4) {
    const km = cleaned[0]; // O primeiro número será o valor de km
    const m = cleaned.slice(1); // Os três últimos números representam metros
    return `${km}.${m}km`; // Formata com um ponto para separação
  } else {
    const km = cleaned.slice(0, cleaned.length - 3); // Quaisquer números além de 3 são km
    const m = cleaned.slice(cleaned.length - 3); // Últimos três números são metros
    return `${km}.${m}km`;
  }
};

export function InputInformation({
  control,
  name,
  placeholder,
  errorMessage,
  errors,
  keyboardType = "default",
  maskType,
  ...rest
}: InformationInputProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const applyMask = (value: string) => {
    if (maskType === "time") {
      return maskTime(value);
    }
    if (maskType === "distance") {
      return maskDistance(value);
    }
    if (maskType === "date") {
      return format(selectedDate, "dd/MM");
    }
    return value;
  };

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            {maskType === "date" ? (
              <S.DateInput hasError={!!errors[name]}>
                <DateTimePicker
                  mode="date"
                  display="default"
                  style={{ backgroundColor: "none" }}
                  value={selectedDate}
                  onChange={(event, date) => {
                    handleDateChange(event, date);
                    onChange(date ? format(date, "yyyy-MM-dd") : ""); // Chama onChange com a data formatada
                  }}
                />
              </S.DateInput>
            ) : (
              <S.Information
                onBlur={onBlur}
                onChangeText={(text) => onChange(text.replace(/\D/g, ""))} // Remove a máscara ao salvar
                value={applyMask(value?.toString() || "")} // Aplica a máscara para a exibição
                placeholder={placeholder}
                placeholderTextColor="#1ea1f3"
                hasError={!!errors[name]}
                keyboardType={keyboardType}
                {...rest}
              />
            )}
          </View>
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
