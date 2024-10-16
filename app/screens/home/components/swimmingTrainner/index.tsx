import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
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

import {
  maskDistance,
  maskTime,
} from "~/screens/createTrainer/components/utils/masks";
import { FormatDate } from "~/screens/createTrainer/components/utils/formatDate";

type informations = {
  day: string;
  distance: number;
  calories: number;
  laps: number;
  time: string;
  hearthRateMin: number;
  hearthRateMax: number;
  onRemove?: () => void;
  onEdit?: () => void;
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
  onEdit,
}: informations) {
  return (
    <Card>
      <Header>
        <Icon>
          <Feather
            name="edit"
            color={theme.colors.white}
            size={24}
            onPress={onEdit}
          />
        </Icon>
        <Indicator>
          <Text size="5-5" color="white" message={FormatDate(day)} />
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
            <Text
              size="4"
              color="yellow"
              message={`${maskTime(time.toString())}`}
            />
          </Data>
          <Data>
            <Text size="4" color="white" message="Distance" />
            <Text
              size="4"
              color="black"
              message={`${maskDistance(distance.toString())}`}
            />
          </Data>
        </Indicator>
        <Indicator>
          <Data>
            <Text size="4" color="white" message="Laps" />
            <Text size="4" color="darkPurple" message={`${laps}`} />
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
