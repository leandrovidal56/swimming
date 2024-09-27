import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SwimmingTrainner } from "./components/swimmingTrainner";

import { StackTypes } from "~/routes/stackTypes";

import { useCallback, useState } from "react";

import {
  SwimmingDataType,
  getSwimmingTraining,
  removeSwimmingTraining,
} from "~/services/storage";

import {
  Container,
  Header,
  Title,
  Icon,
  Button,
  Text,
  Loading,
  Spinner,
} from "./styles";

export function Home({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [trainings, setTrainings] = useState<SwimmingDataType[]>([]);
  const navigation = useNavigation<StackTypes>();

  async function fetchTrainings() {
    try {
      setIsLoading(true);
      const data = await getSwimmingTraining();
      setTrainings(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteTraining(id: string) {
    await removeSwimmingTraining(id);
    fetchTrainings();
  }

  useFocusEffect(
    useCallback(() => {
      fetchTrainings();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Leandro Vidal</Title>
        <Icon>
          <Ionicons
            name="notifications"
            size={24}
            onPress={() => navigation.navigate("Notifications")}
          />
        </Icon>
      </Header>
      <Button onPress={() => navigation.navigate("CreateTrainer")}>
        <Text>Create a new training</Text>
      </Button>
      {isLoading ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <FlatList
          data={trainings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SwimmingTrainner
              day={item.day}
              distance={item.distance}
              calories={item.calories}
              laps={item.laps}
              time={item.time}
              hearthRateMin={item.hearthRateMin}
              hearthRateMax={item.hearthRateMax}
              onRemove={() => deleteTraining(item.id)}
            />
          )}
        />
      )}
    </Container>
  );
}
