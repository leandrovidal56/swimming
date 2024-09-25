import { SafeAreaView } from "react-native-safe-area-context";
import { Router } from "~/routes";
import { View } from "react-native";
import * as S from "./styles";

export default function Index() {
  return (
    <S.Container>
      <Router />
    </S.Container>
  );
}
