import styled from "styled-components/native/";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  background: #fff;
  padding: 0 10px;
`;
export const Header = styled.View`
  justify-content: space-between;
  height: 50px;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 28px;
`;
export const IconBox = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
