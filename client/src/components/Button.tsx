import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  height: ${({ theme }) => theme.space.large};
  outline: none;
  padding: 0 ${({ theme }) => theme.space.medium};
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    background: transparent;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition: background 0.2s;
  }

  &:hover::before {
    background: ${({ theme }) => theme.background.hover};
  }

  &:active::before {
    background: ${({ theme }) => theme.background.active};
  }
`;

export default Button;
