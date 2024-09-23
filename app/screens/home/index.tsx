import { FlatList } from "react-native";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as S from "./styles";
import { SwimmingTrainner } from "./components/swimmingTrainner";

import { StackTypes } from "~/routes/stackTypes";
import { removeSwimmingTraining, swimmingData } from "./utils/swimmingData";

export function Home({}) {
  const navigation = useNavigation<StackTypes>();

  return (
    <S.Container>
      <S.Header>
        <S.UserName>Leandro Vidal</S.UserName>
        <S.IconBox>
          <Ionicons
            name="notifications"
            size={24}
            onPress={() => navigation.navigate("Notifications")}
          />
        </S.IconBox>
      </S.Header>
      <S.Create onPress={() => navigation.navigate("CreateTrainer")}>
        <S.CreateText>Create a new trainning</S.CreateText>
      </S.Create>
      <FlatList
        data={swimmingData}
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
            onRemove={() => removeSwimmingTraining(item.id)}
          />
        )}
      />
    </S.Container>
  );
}
