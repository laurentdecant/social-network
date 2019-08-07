import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.gray};
  height: ${({ theme }) => theme.space.extraLarge};
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
