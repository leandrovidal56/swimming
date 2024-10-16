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
import { getAllSwimmingTraining } from "~/services/storage";
import { useEffect, useState } from "react";

export function Profile({}) {
  const navigation = useNavigation<StackTypes>();
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [sessions, setSessions] = useState("");

  const fillIndicators = async () => {
    const data = await getAllSwimmingTraining();

    setSessions(data.length.toString());
    const distance = data.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.distance),
      0
    );
    setDistance(distance.toString());
    const totalTime = data.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.time),
      0
    );
    setTime(totalTime.toString());
  };

  useEffect(() => {
    fillIndicators();
  }, []);

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
            <Text
              marginTop={10}
              color="white"
              size="4"
              message={sessions.toString()}
            />
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
              message={maskDistance(distance)}
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
              message={maskTime(time)}
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
