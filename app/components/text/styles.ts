import styled from "styled-components/native/";
import { theme } from "~/utils/theme";

type TextStyledProps = {
  hasError?: boolean;
  size: keyof typeof theme.sizes;
  color?: keyof typeof theme.colors;
  fontWeight?: "normal" | "bold" | number;
};

export const Text = styled.Text<TextStyledProps>`
  font-size: ${({ theme, size }) => theme.sizes[size]};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, hasError, color }) => {
    if (hasError) return theme.colors.red;
    if (color) return theme.colors[color];
    return theme.colors.primary.default;
  }};
`;
