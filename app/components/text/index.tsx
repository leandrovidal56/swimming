import { TextProps } from "react-native";
import { Text as StyledText } from "./styles";
import { theme } from "~/utils/theme";

type CustomTextProps = {
  message?: string;
  size?: keyof typeof theme.sizes;
  color?: keyof typeof theme.colors;
  hasError?: boolean;
  fontWeight?: "normal" | "bold" | number;
} & TextProps;

export function Text({
  message,
  size = "4",
  hasError = false,
  color,
  fontWeight = "bold",
  ...props
}: CustomTextProps) {
  return (
    <StyledText
      size={size}
      hasError={hasError}
      color={color}
      fontWeight={fontWeight}
      {...props}
    >
      {message}
    </StyledText>
  );
}
