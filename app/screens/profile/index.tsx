import { Button } from "react-native";
import { useNavigation } from "expo-router";

import * as S from "./styles";

import { StackTypes } from "~/routes/stackTypes";

export function Profile({}) {
  const navigation = useNavigation<StackTypes>();

  return (
    <S.Container>
      <S.Content>
        <Button
          title="go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </S.Content>
    </S.Container>
  );
}
