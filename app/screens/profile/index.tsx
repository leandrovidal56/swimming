import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import ProfileImage from "~/assets/images/profile.png";

import { StackTypes } from "~/routes/stackTypes";
import {
  Avatar,
  Button,
  Container,
  Content,
  IconBox,
  Metrics,
  Row,
} from "./styles";
import { Text } from "~/components/text";
import { theme } from "~/utils/theme";
import {
  maskDistance,
  maskTime,
} from "../createTrainer/components/utils/masks";

export function Profile({}) {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Content>
        <Avatar source={ProfileImage} />
        <Text
          marginTop={10}
          color="black"
          size="4"
          message="leandrovidal56@gmail.com"
        />
        <Text marginTop={10} color="black" size="4" message="São Paulo - SP" />
        <Row style={{ marginBottom: 30 }}>
          <Metrics>
            <Text
              marginTop={10}
              color="white"
              size="4"
              fontWeight={400}
              message="Sessions"
            />
            <Text marginTop={10} color="white" size="4" message="200" />
          </Metrics>
          <Metrics>
            <Text
              marginTop={10}
              color="white"
              size="4"
              fontWeight={400}
              message="Distance"
            />
            <Text
              marginTop={10}
              color="white"
              size="4"
              message={maskDistance("40000")}
            />
          </Metrics>
          <Metrics>
            <Text
              marginTop={10}
              color="white"
              size="4"
              fontWeight={400}
              message="Time"
            />
            <Text
              marginTop={10}
              color="white"
              size="4"
              message={maskTime("200000")}
            />
          </Metrics>
        </Row>
        <Button onPress={() => console.log("Privacy Policy")}>
          <IconBox>
            <MaterialIcons
              name="lock"
              color={theme.colors.white}
              size={30}
              onPress={() => {}}
            />
          </IconBox>
          <Text
            color="black"
            size="4"
            fontWeight={500}
            message="Privacy Policy"
          />
        </Button>
        <Button onPress={() => console.log("Change Name")}>
          <IconBox>
            <MaterialIcons
              name="settings"
              color={theme.colors.white}
              size={30}
              onPress={() => {}}
            />
          </IconBox>
          <Text color="black" size="4" fontWeight={500} message="Change name" />
        </Button>
        <Button onPress={() => console.log("Change Password")}>
          <IconBox>
            <MaterialIcons
              name="settings"
              color={theme.colors.white}
              size={30}
              onPress={() => {}}
            />
          </IconBox>
          <Text
            color="black"
            size="4"
            fontWeight={500}
            message="Change password"
          />
        </Button>
        <Button onPress={() => console.log("Logout")}>
          <IconBox>
            <MaterialIcons
              name="logout"
              color={theme.colors.white}
              size={30}
              onPress={() => {}}
            />
          </IconBox>
          <Text color="black" size="4" fontWeight={500} message="Log out" />
        </Button>
      </Content>
    </Container>
  );
}
