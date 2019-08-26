import { DefaultTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
}

export const clickable = ({ theme }: Props) => `
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
    background: ${theme.background.hover};
  }

  &:active::before {
    background: ${theme.background.active};
  }
`;
