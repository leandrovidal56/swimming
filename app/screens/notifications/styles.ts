import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  background: #ffffff;
  padding: 0 10px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
`;

export const IconBox = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  position: absolute;
  left: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: black;
`;
