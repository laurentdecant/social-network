import styled from "styled-components";
import ButtonBase from "./ButtonBase";

const RoundButton = styled(ButtonBase)`
  border-radius: ${({ theme }) => theme.size.large};
  background: transparent;
  display: flex;
  height: ${({ theme }) => theme.size.large};
  justify-content: center;
  width: ${({ theme }) => theme.size.large};

  &:hover::before {
    background: ${({ theme }) => theme.effect.hoverBackground};
  }

  &:active::before {
    background: ${({ theme }) => theme.effect.activeBackground};
  }
`;

export default RoundButton;
