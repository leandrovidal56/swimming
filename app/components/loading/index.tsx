import { TextProps } from "react-native";
import { Container, Spinner } from "./styles";
import { Text } from "../text";

type LoadingProps = {
  message?: string;
} & TextProps;

export function Loading({ message }: LoadingProps) {
  return (
    <Container>
      <Spinner></Spinner>
      <Text size="4" message={message} />
    </Container>
  );
}
