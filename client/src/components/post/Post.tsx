import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import Post from "../../types/Post";
import { useActions } from "../../hooks";
import * as postActions from "../../actions/post";
import * as meSelector from "../../selectors/me";
import RoundButton from "../core/RoundButton";
import Icon from "../core/Icon";
import Avatar from "../Avatar";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Column)`
  padding: ${({ theme }) => theme.size.medium};
  padding-bottom: ${({ theme }) => theme.size.small};
`;

const Row = styled.div`
  align-items: center;
  display: flex;
`;

const Header = styled(Row)`
  margin-bottom: ${({ theme }) => theme.size.medium};
`;

const StyledAvatar = styled(Avatar)`
  margin-right: ${({ theme }) => theme.size.medium};
`;

const Author = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Timestamp = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
`;

const Message = styled.div`
  margin-bottom: ${({ theme }) => theme.size.small};
  padding: 0 ${({ theme }) => theme.size.small};
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  ${RoundButton}:not(:last-child) {
    margin-right: ${({ theme }) => theme.size.small};
  }
`;

const LikeButton = styled(RoundButton).attrs(() => ({
  children: <Icon type="thumb_up" />
}))``;

const CommentButton = styled(RoundButton).attrs(() => ({
  children: <Icon type="comment" />
}))``;

const DeleteButton = styled(RoundButton).attrs(() => ({
  children: <Icon type="delete" />
}))``;

const format = (timestamp: string) => {
  return moment(timestamp).format("MMM D");
};

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const deletePost = useActions(postActions.deletePost);
  const me = useSelector(meSelector.getMyself);

  const handleDeleteClick = () => {
    deletePost(post.id);
  };

  return (
    <Wrapper>
      <Header>
        <StyledAvatar {...post.author} />
        <Column>
          <Author>{post.author.username}</Author>
          <Timestamp>{format(post.timestamp)}</Timestamp>
        </Column>
      </Header>

      <Message>{post.message}</Message>

      <Actions>
        <Row>
          <LikeButton />
          <CommentButton />
        </Row>

        {me && post.author.id === me.id && (
          <DeleteButton onClick={handleDeleteClick} />
        )}
      </Actions>
    </Wrapper>
  );
};

export default Post;
