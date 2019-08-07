import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: string;
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    text: {
      primary: string;
    };
  }
}

export default {
  color: {
    primary: "#1877f2"
  },
  fontSize: {
    xs: "4px",
    sm: "8x",
    md: "16px",
    lg: "32px",
    xl: "64px"
  },
  radius: "4px",
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px"
  },
  text: {
    primary: "white"
  }
};
