import styled from "styled-components";
import { Dimensionable, height } from "./utils";
import ButtonBase from "./ButtonBase";

const Button = styled(ButtonBase)<Dimensionable>`
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.color.onPrimary};
  height: ${height};
  padding: 0 ${({ theme }) => theme.size.medium};

  &:hover::before {
    background: ${({ theme }) => theme.hover.onPrimary};
  }

  &:active::before {
    background: ${({ theme }) => theme.active.onPrimary};
  }
`;

export default Button;
