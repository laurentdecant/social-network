import styled, {
  ThemedStyledProps,
  DefaultTheme,
  ThemeContext
} from "styled-components";
import { Sized, height } from "./utils";

const DEFAULT = "default";
const PRIMARY = "primary";

interface Colored {
  color?: typeof DEFAULT | typeof PRIMARY;
}

function background({
  color = DEFAULT,
  theme
}: ThemedStyledProps<Colored, DefaultTheme>) {
  switch (color) {
    case DEFAULT:
      return theme.color.gray;
    case PRIMARY:
      return theme.color.primary;
  }
}

function color({
  color = DEFAULT,
  theme
}: ThemedStyledProps<Colored, DefaultTheme>) {
  switch (color) {
    case DEFAULT:
      return theme.color.default;
    case PRIMARY:
      return theme.background.default;
  }
}

const Button = styled.button<Sized & Colored>`
  background: ${background}
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  color: ${color}
  height: ${height};
  outline: none;
  padding: 0 ${({ theme }) => theme.space.medium};
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    background: transparent;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition: background 0.2s;
  }

  &:hover::before {
    background: ${({ theme }) => theme.background.hover};
  }

  &:active::before {
    background: ${({ theme }) => theme.background.active};
  }
`;

export default Button;
