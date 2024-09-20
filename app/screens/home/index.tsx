import { Button } from "react-native";
import { useNavigation } from "expo-router";

import { StackTypes } from "~/routes/stackTypes";

import * as S from "./styles";

export function Home({}) {
  const navigation = useNavigation<StackTypes>();
  return (
    <S.Container>
      <S.Content>
        <Button
          title="navegação"
          onPress={() => navigation.navigate("Profile")}
        />
      </S.Content>
    </S.Container>
  );
}
