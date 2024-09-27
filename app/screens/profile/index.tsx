import { Button } from "react-native";
import { useNavigation } from "expo-router";

import { StackTypes } from "~/routes/stackTypes";
import { Container, Content } from "./styles";

export function Profile({}) {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Content>
        <Button
          title="go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </Content>
    </Container>
  );
}
