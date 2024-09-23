import styled from "styled-components/native/";

type InformationsProps = {
  hasError?: boolean;
};

export const Information = styled.TextInput<InformationsProps>`
  border: 1px solid;
  height: 50px;
  border-radius: 12px;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  color: #1ea1f3;
  border-color: ${(props) => (props.hasError ? "red" : "#1ea1f3")};
`;

export const InformationErrorMessage = styled.Text`
  font-size: 14px;
  color: red;
`;
