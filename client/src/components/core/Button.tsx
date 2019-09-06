import styled from "styled-components";
import { Dimensionable, height } from "./utils";
import ButtonBase from "./ButtonBase";

const Button = styled(ButtonBase)<Dimensionable>`
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.color.onPrimary};
  height: ${height};
  padding: 0 ${({ theme }) => theme.size.medium};
`;

export default Button;
