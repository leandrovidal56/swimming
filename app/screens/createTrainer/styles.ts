import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  padding: 0 10px;
  background: #ffffff;
`;

export const Header = styled.View`
  height: 50px;
  margin-bottom: 20px;
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
  font-size: 28px;
  color: black;
`;

export const Button = styled.TouchableOpacity`
  width: "100%";
  height: 50px;
  margin-bottom: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: #1ea1f3;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
