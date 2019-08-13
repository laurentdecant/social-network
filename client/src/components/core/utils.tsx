import { ThemedStyledProps, DefaultTheme } from "styled-components";

const SMALL = "small";
const MEDIUM = "medium";
const LARGE = "large";

interface Dimensionable {
  dimension?: typeof SMALL | typeof MEDIUM | typeof LARGE;
}

function height({
  dimension = MEDIUM,
  theme
}: ThemedStyledProps<Dimensionable, DefaultTheme>) {
  switch (dimension) {
    case SMALL:
      return theme.space.mediumLarge;
    case MEDIUM:
      return theme.space.large;
    case LARGE:
      return theme.space.largeExtraLarge;
  }
}

export { Dimensionable, height };
