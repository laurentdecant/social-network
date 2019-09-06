import styled from "styled-components";
import { clickable } from "../../styles/effects";

const ButtonBase = styled.button`
  border: 0;
  outline: 0;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${clickable}
`;

export default ButtonBase;
