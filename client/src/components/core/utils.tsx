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
      return theme.size.mediumLarge;
    case MEDIUM:
      return theme.size.large;
    case LARGE:
      return theme.size.largeExtraLarge;
  }
}

export { Dimensionable, height };
