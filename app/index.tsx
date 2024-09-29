import { Router } from "~/routes";
import * as S from "./styles";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./utils/theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Router />
      </S.Container>
    </ThemeProvider>
  );
}
