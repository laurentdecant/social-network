import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import User from "../types/User";

const Img = styled.img`
  border-radius: 50%;
  height: ${({ theme }) => theme.size.extraLarge};
  width: ${({ theme }) => theme.size.extraLarge};
`;

const Avatar = ({ id, className }: User & HTMLAttributes<HTMLElement>) => (
  <Img
    src={`https://www.gravatar.com/avatar/${id}?d=identicon`}
    className={className}
  />
);

export default Avatar;
