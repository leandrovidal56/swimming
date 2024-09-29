import styled from "styled-components/native/";

type InputProps = {
  hasError?: boolean;
};

export const Container = styled.TextInput<InputProps>`
  height: 50px;
  margin-top: ${({ theme }) => theme.spaces.lg};
  border: 1px solid;
  border-color: ${(props) => (props.hasError ? "red" : "#1ea1f3")};
  border-radius: ${({ theme }) => theme.radius[3]};
  align-items: center;
  text-align: center;
  color: #1ea1f3;
`;
