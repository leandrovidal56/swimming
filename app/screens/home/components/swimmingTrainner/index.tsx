import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Card,
  Header,
  Day,
  Icon,
  Row,
  Text,
  Number,
  Indicator,
  Data,
  HeartInformationsRow,
  HeartText,
} from "./styles";

type informations = {
  day: string;
  distance: number;
  calories: number;
  laps: number;
  time: number;
  hearthRateMin: number;
  hearthRateMax: number;
  onRemove?: () => void;
};

export function SwimmingTrainner({
  day,
  distance,
  calories,
  laps,
  time,
  hearthRateMin,
  hearthRateMax,
  onRemove,
}: informations) {
  return (
    <Card>
      <Header>
        <Day>{day}</Day>
        <Icon>
          <Ionicons name="trash" size={24} onPress={onRemove} />
        </Icon>
      </Header>
      <Row>
        <Indicator>
          <Data>
            <Number>{distance}</Number>
          </Data>
          <Text>Distance</Text>
        </Indicator>
        <Indicator>
          <Data>
            <Number>{calories}</Number>
          </Data>
          <Text>Calories</Text>
        </Indicator>
        <Indicator>
          <Data>
            <Number>{laps}</Number>
          </Data>
          <Text>Laps</Text>
        </Indicator>
        <Indicator>
          <Data>
            <Number>{time}</Number>
          </Data>
          <Text>Time</Text>
        </Indicator>
      </Row>
      <HeartInformationsRow>
        <HeartText>Hearth Rate Min: {hearthRateMin}</HeartText>
        <HeartText>Hearth Rate Max: {hearthRateMax}</HeartText>
      </HeartInformationsRow>
    </Card>
  );
}
