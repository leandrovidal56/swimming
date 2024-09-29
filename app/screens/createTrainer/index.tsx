import { useNavigation } from "expo-router";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StackTypes } from "~/routes/stackTypes";
import { Input } from "./components/input";
import { Container, Header, Icon, Content, Button } from "./styles";


import { SwimmingDataType, addNewSwimmingTraining } from "~/services/storage";
import { Text } from "~/components/text";

export function CreateTrainer({}) {
  const navigation = useNavigation<StackTypes>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SwimmingDataType>();

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
      day,
      distance,
      calories,
      laps,
      time,
      hearthRateMin,
      hearthRateMax,
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
        <Text
          size="7"
          style={{ textAlign: "center" }}
          color="black"
          message="Create your training"
        />
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
          <Text color="white" size="4" message="Create" />
        </Button>
      </Content>
    </Container>
  );
}
