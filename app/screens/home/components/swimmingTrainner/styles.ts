import styled from "styled-components/native/";

export const Card = styled.View`
  background: ${({ theme }) => theme.colors.primary.default};
  height: 200px;
  border-radius: ${({ theme }) => theme.sizes[3]};
  padding: ${({ theme }) => theme.spaces.md};
  margin-bottom: ${({ theme }) => theme.spaces.md};
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spaces.md};
`;

export const Indicator = styled.View`
  align-items: center;
`;

export const Data = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spaces.sm};
`;

export const HeartInformationsRow = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spaces.md};
  justify-content: space-between;
`;
