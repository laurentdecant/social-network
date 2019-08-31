import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      primary: string;
      onBackground: string;
      onPrimary: string;
      gray: string;
      darkGray: string;
      success: string;
      warning: string;
      error: string;
    };
    effect: {
      hover: string;
      active: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      bold: number;
    };
    foreground: {
      default: string;
    };
    radius: string;
    size: {
      extraSmall: string;
      extraSmallSmall: string;
      small: string;
      smallMedium: string;
      medium: string;
      mediumLarge: string;
      large: string;
      largeExtraLarge: string;
      extraLarge: string;
    };
  }
}

export default {
  color: {
    background: "#fafafa",
    primary: "#1877f2",
    onBackground: "#212121",
    onPrimary: "#fafafa",
    gray: "#e0e0e0",
    darkGray: "#9e9e9e",
    success: "",
    warning: "",
    error: ""
  },
  effect: {
    hover: "rgba(255, 255, 255, 0.1)",
    active: "rgba(255, 255, 255, 0.2)"
  },
  fontWeight: {
    light: 200,
    normal: 400,
    bold: 600
  },
  foreground: {
    default: "black"
  },
  radius: "4px",
  size: {
    extraSmall: "4px",
    extraSmallSmall: "6px",
    small: "8px",
    smallMedium: "12px",
    medium: "16px",
    mediumLarge: "24px",
    large: "32px",
    largeExtraLarge: "48px",
    extraLarge: "64px"
  }
};
