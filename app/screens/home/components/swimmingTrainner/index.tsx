import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Card,
  Header,
  Icon,
  Row,
  Indicator,
  Data,
  HeartInformationsRow,
} from "./styles";
import { Text } from "~/components/text";
import { theme } from "~/utils/theme";

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
        <Indicator>
          <Text size="5-5" color="white" message={day} />
          <Text size="3-5" color="white" message="7:48 am - 8:09 am" />
        </Indicator>
        <Icon>
          <Ionicons
            name="trash"
            color={theme.colors.white}
            size={24}
            onPress={onRemove}
          />
        </Icon>
      </Header>
      <Row>
        <Indicator>
          <Data>
            <Text size="4" color="white" message="Workout Time" />
            <Text size="4" color="yellow" message={`${time}`} />
          </Data>
          <Data>
            <Text size="4" color="white" message="Distance" />
            <Text size="4" color="lightBlue" message={`${distance}`} />
          </Data>
        </Indicator>
        <Indicator>
          <Data>
            <Text size="4" color="white" message="Laps" />
            <Text size="4" color="lightPurple" message={`${laps}`} />
          </Data>
          <Data>
            <Text size="4" color="white" message="Calories" />
            <Text size="4" color="redText" message={`${calories}`} />
          </Data>
        </Indicator>
      </Row>
      <HeartInformationsRow>
        <Text
          size="4"
          color="white"
          fontWeight={"normal"}
          message={`Hearth Rate Min: ${hearthRateMin}`}
        />
        <Text
          size="4"
          color="white"
          fontWeight={"normal"}
          message={`Hearth Rate Max: ${hearthRateMax}`}
        />
      </HeartInformationsRow>
    </Card>
  );
}
