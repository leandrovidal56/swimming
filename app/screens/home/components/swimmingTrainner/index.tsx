import * as S from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    <S.SwimmingTrainner>
      <S.Header>
        <S.Day>{day}</S.Day>
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
            <S.IndicatorNumber>{time}</S.IndicatorNumber>
          </S.IndicatorView>
          <S.IndicatorText>Time</S.IndicatorText>
        </S.Indicator>
      </S.IndicatorRow>
      <S.HeartRow>
        <S.HeartText>Hearth Rate Min: {hearthRateMin}</S.HeartText>
        <S.HeartText>Hearth Rate Max: {hearthRateMax}</S.HeartText>
      </S.HeartRow>
    </S.SwimmingTrainner>
  );
}
