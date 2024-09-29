import { useNavigation } from "expo-router";

import { StackTypes } from "~/routes/stackTypes";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Container, Content, Header, Icon } from "./styles";
import { Text } from "~/components/text";

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
        <Text color="black" size="7" message="Notifications" />
      </Header>
      <Content></Content>
    </Container>
  );
}
