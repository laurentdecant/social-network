import styled from "styled-components";
import ButtonBase from "./ButtonBase";

const RoundButton = styled(ButtonBase)`
  border-radius: ${({ theme }) => theme.size.large};
  background: transparent;
  display: flex;
  height: ${({ theme }) => theme.size.largeExtraLarge};
  justify-content: center;
  padding: ${({ theme }) => theme.size.small};
  width: ${({ theme }) => theme.size.largeExtraLarge};

  &:hover::before {
    background: ${({ theme }) => theme.hover.onBackground};
  }

  &:active::before {
    background: ${({ theme }) => theme.active.onBackground};
  }
`;

export default RoundButton;
