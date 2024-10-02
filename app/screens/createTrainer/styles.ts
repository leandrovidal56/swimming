import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  width: "100%";
  height: 50px;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
  border-radius: ${({ theme }) => theme.radius[3]};
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.default};
`;
