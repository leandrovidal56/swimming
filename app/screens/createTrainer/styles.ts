import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.white};
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
  left: 10px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes[7]};
  color: ${({ theme }) => theme.colors.black};
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

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
