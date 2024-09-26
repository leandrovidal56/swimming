import { useNavigation } from "expo-router";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StackTypes } from "~/routes/stackTypes";
import { InputInformation } from "./components/input";

import * as S from "./styles";

import { SwimmingDataType, addNewSwimmingTraining } from "~/services/storage";
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
    const newTraining = {
      id: uuid.v4().toString(),
      day: data.day,
      distance: data.distance,
      calories: data.calories,
      craw: data.craw,
      backstroke: data.backstroke,
      breaststroke: data.breaststroke,
      butterfly: data.butterfly,
      laps: data.laps,
      time: data.time,
      hearthRateMin: data.hearthRateMin,
      hearthRateMax: data.hearthRateMax,
    };

    await addNewSwimmingTraining(newTraining);

    navigation.navigate("Home");
  };

  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setValue("day", today);
  }, [setValue]);
  return (
    <S.Container>
      <S.Header>
        <S.IconBox>
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
          />
        </S.IconBox>
        <S.Title>Create your trainning</S.Title>
      </S.Header>
      <S.Content showsVerticalScrollIndicator={false}>
        <InputInformation
          control={control}
          name="day"
          placeholder="Select Day"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="date"
        />
        <InputInformation
          control={control}
          name="distance"
          placeholder="Total distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
          maxLength={8}
        />
        <InputInformation
          control={control}
          name="craw"
          placeholder="Crawl distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
          maxLength={8}
        />
        <InputInformation
          control={control}
          name="backstroke"
          placeholder="Backstroke distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
          maxLength={8}
        />
        <InputInformation
          control={control}
          name="breaststroke"
          placeholder="Breaststroke distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
          maxLength={8}
        />
        <InputInformation
          control={control}
          name="butterfly"
          placeholder="Butterfly distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="distance"
          maxLength={8}
        />
        <InputInformation
          control={control}
          name="calories"
          placeholder="Calories"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={4}
        />
        <InputInformation
          control={control}
          name="laps"
          placeholder="Laps"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />
        <InputInformation
          control={control}
          name="time"
          placeholder="Hours and minutes"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maskType="time"
          maxLength={4}
        />
        <InputInformation
          control={control}
          name="hearthRateMin"
          placeholder="HeartMin"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />
        <InputInformation
          control={control}
          name="hearthRateMax"
          placeholder="HeartMax"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
          maxLength={3}
        />
        <S.Create onPress={handleSubmit(onSubmit)}>
          <S.CreateText>Create</S.CreateText>
        </S.Create>
      </S.Content>
    </S.Container>
  );
}
