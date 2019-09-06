import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getMyself } from "../selectors/me";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  height: ${({ theme }) => theme.size.large};
  margin-right: ${({ theme }) => theme.size.small};
  width: ${({ theme }) => theme.size.large};
`;

const User = () => {
  const myself = useSelector(getMyself);

  return (
    <Wrapper>
      {myself && <StyledAvatar {...myself} />}
      {myself && myself.username}
    </Wrapper>
  );
};

export default User;
