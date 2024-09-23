import { useNavigation } from "expo-router";

import * as S from "./styles";

import { StackTypes } from "~/routes/stackTypes";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Notifications({}) {
  const navigation = useNavigation<StackTypes>();

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
        <S.Title>Notifications</S.Title>
      </S.Header>
      <S.Content></S.Content>
    </S.Container>
  );
}
