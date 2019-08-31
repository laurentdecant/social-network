import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getMyself } from "../selectors/me";
import Icon from "./core/Icon";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.size.small};
`;

const User = () => {
  const myself = useSelector(getMyself);

  return (
    <Wrapper>
      <StyledIcon type="person" />
      {myself && myself.username}
    </Wrapper>
  );
};

export default User;
