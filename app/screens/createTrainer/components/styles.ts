import styled from "styled-components/native/";

type InputProps = {
  hasError?: boolean;
};

export const Container = styled.TextInput<InputProps>`
  height: 50px;
  margin-top: 20px;
  border: 1px solid;
  border-color: ${(props) => (props.hasError ? "red" : "#1ea1f3")};
  border-radius: 12px;
  align-items: center;
  text-align: center;
  color: #1ea1f3;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  color: red;
`;
