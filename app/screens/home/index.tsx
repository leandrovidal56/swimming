import { Button, FlatList } from "react-native";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StackTypes } from "~/routes/stackTypes";

import * as S from "./styles";
import { SwimmingTrainner } from "./components/swimmingTrainner";
import {
  swimmingData as initialSwimmingData,
  SwimmingDataType,
} from "./utils/swimmingData";
import { useState } from "react";

export function Home({}) {
  const navigation = useNavigation<StackTypes>();
  const [swimmingData, setSwimmingData] =
    useState<SwimmingDataType[]>(initialSwimmingData);

  return (
    <S.Container>
      <S.Header>
        <S.UserName>Leandro Vidal</S.UserName>
        <S.IconBox>
          <Ionicons name="notifications" size={24} onPress={() => {}} />
        </S.IconBox>
      </S.Header>
      <S.Create onPress={() => navigation.navigate("CreateTrainer")}>
        <S.CreateText>Create a new trainer</S.CreateText>
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
          />
        )}
      />
    </S.Container>
  );
}
