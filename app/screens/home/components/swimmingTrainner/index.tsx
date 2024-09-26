import {
  maskDistance,
  maskTime,
} from "~/screens/createTrainer/components/input";
import * as S from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { format } from "date-fns";

type informations = {
  day: string;
  distance: number;
  craw: number;
  backstroke?: number;
  breaststroke?: number;
  butterfly?: number;
  calories: number;
  laps: number;
  time: string;
  hearthRateMin: number;
  hearthRateMax: number;
  onRemove?: () => void;
};
const getDistanceUnit = (value: number): string => {
  const stringValue = value.toString();

  if (stringValue.length === 3) {
    return "metros"; // Retorna "metros" se tiver 3 dígitos
  } else {
    return "quilômetros"; // Retorna "quilômetros" se tiver 4 dígitos
  }
};

export function SwimmingTrainner({
  day,
  distance,
  craw,
  backstroke,
  breaststroke,
  butterfly,
  calories,
  laps,
  time,
  hearthRateMin,
  hearthRateMax,
  onRemove,
}: informations) {
  return (
    <S.SwimmingTrainner>
      <S.Header>
        <S.Day>{format(day, "dd - MMMM")}</S.Day>
        <S.IconBox>
          <Ionicons name="trash" size={24} onPress={onRemove} />
        </S.IconBox>
      </S.Header>
      <S.IndicatorRow>
        <S.Indicator>
          <S.IndicatorView>
            <S.IndicatorNumber>{distance}</S.IndicatorNumber>
          </S.IndicatorView>
          <S.IndicatorText>Distance</S.IndicatorText>
          <S.IndicatorText>
            {getDistanceUnit(300)}
            {/* //testando */}
            {/* //testando */}
            {/* //testando */}
            {/* //testando */}
            {/* //testando */}
            {/* //testando */}
            {/* {distance.lenght > 3 ? "metros" : "Km"} */}
          </S.IndicatorText>
        </S.Indicator>
        <S.Indicator>
          <S.IndicatorView>
            <S.IndicatorNumber>{calories}</S.IndicatorNumber>
          </S.IndicatorView>
          <S.IndicatorText>Calories</S.IndicatorText>
        </S.Indicator>
        <S.Indicator>
          <S.IndicatorView>
            <S.IndicatorNumber>{laps}</S.IndicatorNumber>
          </S.IndicatorView>
          <S.IndicatorText>Laps</S.IndicatorText>
        </S.Indicator>
        <S.Indicator>
          <S.IndicatorView>
            <S.IndicatorNumber>{maskTime(time)}</S.IndicatorNumber>
          </S.IndicatorView>
          <S.IndicatorText>Time</S.IndicatorText>
        </S.Indicator>
      </S.IndicatorRow>
    </S.SwimmingTrainner>
  );
}
