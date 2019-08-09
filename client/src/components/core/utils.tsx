import { ThemedStyledProps, DefaultTheme } from "styled-components";

const SMALL = "small";
const MEDIUM = "medium";
const LARGE = "large";

interface Sized {
  size?: typeof SMALL | typeof MEDIUM | typeof LARGE;
}

function height({
  size = MEDIUM,
  theme
}: ThemedStyledProps<Sized, DefaultTheme>) {
  switch (size) {
    case SMALL:
      return theme.space.mediumLarge;
    case MEDIUM:
      return theme.space.large;
    case LARGE:
      return theme.space.largeExtraLarge;
  }
}

export { Sized, height };
