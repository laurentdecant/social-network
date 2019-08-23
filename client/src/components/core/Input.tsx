import styled from "styled-components";
import { Dimensionable, height } from "./utils";

const Input = styled.input<Dimensionable>`
  background: ${({ theme }) => theme.background.default};
  border: 0;
  border-radius: ${({ theme }) => theme.radius};
  height: ${height};
  padding: 0 ${({ theme }) => theme.size.small};

  &:focus {
    outline: 0;
  }
`;

export default Input;
