import styled from "styled-components/native/";

export const Card = styled.View`
  background: ${({ theme }) => theme.colors.black};

  height: 220px;
  border-radius: ${({ theme }) => theme.sizes[3]};
  padding: ${({ theme }) => theme.spaces.md};
  margin-bottom: ${({ theme }) => theme.spaces.md};
  border: 1px solid ${({ theme }) => theme.colors.white};
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
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spaces.md};
`;

export const Indicator = styled.View``;

export const Data = styled.View`
  width: 140px;
  height: 60px;
  border-radius: ${({ theme }) => theme.radius[2]};
`;

export const HeartInformationsRow = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spaces.sm};
  margin-bottom: ${({ theme }) => theme.spaces.sm};
  justify-content: space-between;
`;
