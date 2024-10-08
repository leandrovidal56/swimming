import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  background: ${({ theme }) => theme.colors.white};
  margin-top: -${({ theme }) => theme.spaces.xlg};
  margin-bottom: -${({ theme }) => theme.spaces.xlg};
`;
