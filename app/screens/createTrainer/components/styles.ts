import styled from "styled-components/native/";
import { theme } from "~/utils/theme";

type InputProps = {
  hasError?: boolean;
};

export const Container = styled.TextInput<InputProps>`
  height: 50px;
  margin-top: ${({ theme }) => theme.spaces.lg};
  border: 1px solid;
  border-color: ${(props) => (props.hasError ? "red" : theme.colors.white)};
  border-radius: ${({ theme }) => theme.radius[3]};
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
