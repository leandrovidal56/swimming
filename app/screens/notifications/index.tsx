import { useNavigation } from "expo-router";

import { StackTypes } from "~/routes/stackTypes";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Container, Content } from "./styles";
import { Text } from "~/components/text";

export function Notifications({}) {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Content></Content>
    </Container>
  );
}
