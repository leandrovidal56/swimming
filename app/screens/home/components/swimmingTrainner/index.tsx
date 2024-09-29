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
        <Text size="5-5" color="black" message={day} />
        <Icon>
          <Ionicons name="trash" size={24} onPress={onRemove} />
        </Icon>
      </Header>
      <Row>
        <Indicator>
          <Data>
            <Text size="5-5" color="black" message={`${distance}`} />
          </Data>
          <Text
            size="3"
            color="black"
            fontWeight={"normal"}
            message={"Distance"}
          />
        </Indicator>
        <Indicator>
          <Data>
            <Text size="5-5" color="black" message={`${calories}`} />
          </Data>
          <Text
            size="3"
            color="black"
            fontWeight={"normal"}
            message={"Calories"}
          />
        </Indicator>
        <Indicator>
          <Data>
            <Text size="5-5" color="black" message={`${laps}`} />
          </Data>
          <Text size="3" color="black" fontWeight={"normal"} message={"Laps"} />
        </Indicator>
        <Indicator>
          <Data>
            <Text size="5-5" color="black" message={`${time}`} />
          </Data>
          <Text size="3" color="black" fontWeight={"normal"} message={"Time"} />
        </Indicator>
      </Row>
      <HeartInformationsRow>
        <Text
          size="3"
          color="black"
          fontWeight={"normal"}
          message={`
            Hearth Rate Min: ${hearthRateMin}
          `}
        />
        <Text
          size="3"
          color="black"
          fontWeight={"normal"}
          message={`
            Hearth Rate Max: ${hearthRateMax}
          `}
        />
      </HeartInformationsRow>
    </Card>
  );
}
