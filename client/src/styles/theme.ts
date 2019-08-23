import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      default: string;
      hover: string;
      active: string;
    };
    color: {
      default: string;
      primary: string;
      gray: string;
      success: string;
      warning: string;
      error: string;
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
    text: {
      primary: string;
    };
  }
}

export default {
  background: {
    default: "white",
    hover: "rgba(0, 0, 0, 0.1)",
    active: "rgba(0, 0, 0, 0.2)"
  },
  color: {
    default: "black",
    primary: "#1877f2",
    gray: "#e0e0e0",
    success: "",
    warning: "",
    error: ""
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
  },
  text: {
    primary: "white"
  }
};
