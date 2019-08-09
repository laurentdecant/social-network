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
    fontSize: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
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
    space: {
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
    gray: "#eeeeee",
    success: "",
    warning: "",
    error: ""
  },
  fontSize: {
    extraSmall: "4px",
    small: "8x",
    medium: "16px",
    large: "32px",
    extraLarge: "64px"
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 500
  },
  foreground: {
    default: "black"
  },
  radius: "4px",
  space: {
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
