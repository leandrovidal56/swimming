import { useNavigation } from "expo-router";
import { useForm } from "react-hook-form";

import { StackTypes } from "~/routes/stackTypes";
import { Input } from "./components/input";
import { Container, Content, Button } from "./styles";

import {
  SwimmingDataType,
  editSwimmingTraining,
  filterSwimmingTraining,
} from "~/services/storage";
import { Text } from "~/components/text";

import { useEffect } from "react";

export function EditTrainer({ route }) {
  const navigation = useNavigation<StackTypes>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<SwimmingDataType>({});
  const { id } = route.params;

  const fillForm = async (id: string) => {
    const data = await filterSwimmingTraining(id);
    setValue("day", data!.day);
    setValue("distance", data!.distance);
    setValue("calories", data!.calories);
    setValue("laps", data!.laps);
    setValue("time", data!.time);
    setValue("hearthRateMin", data!.hearthRateMin);
    setValue("hearthRateMax", data!.hearthRateMax);
  };

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

    const updatedTraining = {
      id: id,
      day: day,
      distance: distance,
      calories: calories,
      laps: laps,
      time: time,
      hearthRateMin: hearthRateMin,
      hearthRateMax: hearthRateMax,
    };
    await editSwimmingTraining(updatedTraining);

    navigation.navigate("Home");
  };

  useEffect(() => {
    fillForm(id);
  }, []);

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
          <Text color="white" size="4" message="Edit" />
        </Button>
      </Content>
    </Container>
  );
}
