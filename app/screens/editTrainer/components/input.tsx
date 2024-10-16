import { useState } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { DateInput, Information } from "./styles";
import { TextInputProps, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SwimmingDataType } from "~/services/storage/swimmingData";
import { Text } from "~/components/text";
import { FormatDate } from "./utils/formatDate";
import { maskDistance, maskTime } from "./utils/masks";

type InformationInputProps = {
  control: Control<SwimmingDataType>;
  name: keyof SwimmingDataType;
  placeholder?: string;
  errorMessage?: string;
  errors: FieldErrors<SwimmingDataType>;
  maskType?: "time" | "distance" | "date";
} & TextInputProps;

export function Input({
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
      console.log("take date", date);
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
      return;
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
              <>
                <DateInput
                  onPress={() => setShowDatePicker(!showDatePicker)}
                  hasError={!!errors[name]}
                >
                  <Text
                    color="lightBlue"
                    fontWeight={"normal"}
                    size="3-5"
                    message={`Date ${FormatDate(selectedDate)}`}
                  />
                </DateInput>
                {showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="default"
                    value={selectedDate}
                    style={{
                      marginTop: 10,
                    }}
                    onChange={(event, date) => {
                      handleDateChange(event, date);
                    }}
                  />
                )}
              </>
            ) : (
              <Information
                onBlur={onBlur}
                onChangeText={(text) => onChange(text.replace(/\D/g, ""))}
                value={applyMask(value?.toString() || "")}
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
      {errors[name] && <Text hasError size="3-5" message={errorMessage} />}
    </>
  );
}
