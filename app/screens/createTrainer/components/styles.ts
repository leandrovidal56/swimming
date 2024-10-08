import styled from "styled-components/native/";
import { theme } from "~/utils/theme";

type InformationsProps = {
  hasError?: boolean;
};

export const DateInput = styled.TouchableOpacity<InformationsProps>`
  border: 1px solid;
  height: 50px;
  border-radius: ${({ theme }) => theme.sizes[3]};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes["2-5"]};
  color: ${({ theme }) => theme.colors.lightBlue};
  border-color: ${(props) =>
    props.hasError ? theme.colors.red : theme.colors.lightBlue};
  flex-direction: row;
`;

export const Information = styled.TextInput<InformationsProps>`
  border: 1px solid;
  height: 50px;
  border-radius: ${({ theme }) => theme.sizes[3]};
  align-items: center;
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes["2-5"]};
  color: #1ea1f3;
  border-color: ${(props) =>
    props.hasError ? theme.colors.red : theme.colors.lightBlue};
`;

export const InformationErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.sizes["3-5"]};
  color: ${({ theme }) => theme.colors.red};
`;
