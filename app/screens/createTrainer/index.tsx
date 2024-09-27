import { useNavigation } from "expo-router";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StackTypes } from "~/routes/stackTypes";
import { Input } from "./components/input";
import {
  Container,
  Header,
  Icon,
  Content,
  Title,
  Button,
  Text,
} from "./styles";

import { SwimmingDataType, addNewSwimmingTraining } from "~/services/storage";

export function CreateTrainer({}) {
  const navigation = useNavigation<StackTypes>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SwimmingDataType>();

  const onSubmit = async (data: SwimmingDataType) => {
    const newTraining = {
      id: uuid.v4().toString(),
      day: data.day,
      distance: data.distance,
      calories: data.calories,
      laps: data.laps,
      time: data.time,
      hearthRateMin: data.hearthRateMin,
      hearthRateMax: data.hearthRateMax,
    };

    await addNewSwimmingTraining(newTraining);

    navigation.navigate("Home");
  };

  return (
    <Container>
      <Header>
        <Icon>
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
          />
        </Icon>
        <Title>Create your training</Title>
      </Header>
      <Content>
        <Input
          control={control}
          name="day"
          placeholder="Day"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="distance"
          placeholder="Distance"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="calories"
          placeholder="Calories"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="laps"
          placeholder="Laps"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="time"
          placeholder="Time"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="hearthRateMin"
          placeholder="HeartMin"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Input
          control={control}
          name="hearthRateMax"
          placeholder="HeartMax"
          keyboardType="numeric"
          errorMessage="This is required, Fill please."
          errors={errors}
        />
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Create</Text>
        </Button>
      </Content>
    </Container>
  );
}
