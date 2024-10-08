import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-width: ${({ theme }) => theme.sizes["0-5"]};
  border-color: ${({ theme }) => theme.colors.lightBlue};
  margin-top: ${({ theme }) => theme.sizes["5"]};
`;

export const Metrics = styled.View`
  width: 100px;
  height: 60px;
  border-radius: ${({ theme }) => theme.sizes["3"]};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  align-items: center;
`;

export const Row = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes["2-5"]};
  margin-top: ${({ theme }) => theme.sizes["5"]};
`;

export const IconBox = styled.View`
  width: ${({ theme }) => theme.sizes["10"]};
  height: ${({ theme }) => theme.sizes["10"]};
  border-radius: ${({ theme }) => theme.sizes["5"]};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes["2-5"]};
  margin-top: 20px;
`;
