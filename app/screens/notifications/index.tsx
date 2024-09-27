import { useNavigation } from "expo-router";

import { StackTypes } from "~/routes/stackTypes";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Container, Content, Header, Icon, Title } from "./styles";

export function Notifications({}) {
  const navigation = useNavigation<StackTypes>();

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
        <Title>Notifications</Title>
      </Header>
      <Content></Content>
    </Container>
  );
}
