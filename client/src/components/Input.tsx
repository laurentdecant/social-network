import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  height: ${({ theme }) => theme.space.lg};
  padding: 0 ${({ theme }) => theme.space.sm};

  &:focus {
    outline: none;
  }
`;

export default Input;
