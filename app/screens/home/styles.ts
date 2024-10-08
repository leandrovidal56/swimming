import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 10px;
  padding-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
  width: "100%";
  height: 50px;
  background: ${({ theme }) => theme.colors.lightBlue};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius[3]};
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;
