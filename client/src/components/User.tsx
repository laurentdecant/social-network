import React from "react";
import Icon from "./core/Icon";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.size.small};
`;

const User = () => {
  return (
    <Wrapper>
      <StyledIcon type="person" />
      Laurent
    </Wrapper>
  );
};

export default User;
