import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  background: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
`;

export const Header = styled.View`
  justify-content: space-between;
  height: 50px;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius[3]};
`;

export const Button = styled.TouchableOpacity`
  width: "100%";
  height: 50px;
  background: ${({ theme }) => theme.colors.primary.default};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius[3]};
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;
