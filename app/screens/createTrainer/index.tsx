import { useNavigation } from "expo-router";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";

import { StackTypes } from "~/routes/stackTypes";
import { Input } from "./components/input";
import { Container, Content, Button } from "./styles";

import { SwimmingDataType, addNewSwimmingTraining } from "~/services/storage";
import { Text } from "~/components/text";
import { format } from "date-fns";
import { useEffect } from "react";

export function CreateTrainer({}) {
  const navigation = useNavigation<StackTypes>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<SwimmingDataType>({});

  const onSubmit = async (data: SwimmingDataType) => {
    const {
      day,
      distance,
      calories,
      laps,
      time,
      hearthRateMin,
      hearthRateMax,
    } = data;

    const newTraining = {
      id: uuid.v4().toString(),
      day: day,
      distance: distance,
      calories: calories,
      laps: laps,
      time: time,
      hearthRateMin: hearthRateMin,
      hearthRateMax: hearthRateMax,
    };

    await addNewSwimmingTraining(newTraining);

    navigation.navigate("Home");
  };

  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setValue("day", today);
  }, [setValue]);

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Input
          control={control}
          name="day"
          placeholder="Select Day"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="date"
          selectionColor="white"
          selectionHandleColor="white"
          placeholderTextColor="#fff"
        />

        <Input
          control={control}
          name="distance"
          placeholder="Total distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
        />

        <Input
          control={control}
          name="calories"
          placeholder="Calories"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={5}
        />

        <Input
          control={control}
          name="laps"
          placeholder="Laps"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />

        <Input
          control={control}
          name="time"
          placeholder="Time"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="time"
        />

        <Input
          control={control}
          name="hearthRateMin"
          placeholder="HeartMin"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />

        <Input
          control={control}
          name="hearthRateMax"
          placeholder="HeartMax"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text color="white" size="4" message="Create" />
        </Button>
      </Content>
    </Container>
  );
}
