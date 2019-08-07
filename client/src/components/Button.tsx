import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  height: ${({ theme }) => theme.space.lg};
  outline: none;
  padding: 0 ${({ theme }) => theme.space.md};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
