import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 50px;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Icon = styled.View`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 20px;
  justify-content: center;
`;
