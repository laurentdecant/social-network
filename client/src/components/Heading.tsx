import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin: 0 0 ${({ theme }) => theme.space.large} 0;
  text-align: center;
`;

export default Heading;
