import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spaces: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}

export default {
  spaces: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64
  }
};
