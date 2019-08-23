import styled, { ThemedStyledProps, DefaultTheme } from "styled-components";
import { Dimensionable, height } from "./utils";

const DEFAULT = "default";
const PRIMARY = "primary";

interface Colorable {
  color?: typeof DEFAULT | typeof PRIMARY;
}

function background({
  color = DEFAULT,
  theme
}: ThemedStyledProps<Colorable, DefaultTheme>) {
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
}: ThemedStyledProps<Colorable, DefaultTheme>) {
  switch (color) {
    case DEFAULT:
      return theme.color.default;
    case PRIMARY:
      return theme.background.default;
  }
}

const Button = styled.button<Dimensionable & Colorable>`
  background: ${background};
  border: 0;
  border-radius: ${({ theme }) => theme.radius};
  color: ${color}
  height: ${height};
  outline: 0;
  padding: 0 ${({ theme }) => theme.size.medium};
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
