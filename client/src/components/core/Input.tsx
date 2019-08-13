import styled from "styled-components";
import { Dimensionable, height } from "./utils";

const Input = styled.input<Dimensionable>`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  height: ${height};
  padding: 0 ${({ theme }) => theme.space.small};

  &:focus {
    outline: none;
  }
`;

export default Input;
