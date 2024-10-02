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
  align-items: center;
  justify-content: center;
`;
