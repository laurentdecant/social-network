import styled from "styled-components";

const COMMENT = "comment";
const DELETE = "delete";
const GROUP = "group";
const LIST = "list";
const PERSON = "person";
const SEND = "send";
const SHARE = "share";
const THUMB_UP = "thumb_up";

interface Props {
  type:
    | typeof COMMENT
    | typeof DELETE
    | typeof GROUP
    | typeof LIST
    | typeof PERSON
    | typeof SEND
    | typeof SHARE
    | typeof THUMB_UP;
}

const Icon = styled.i.attrs(({ type }: Props) => ({
  className: "material-icons",
  children: type
}))<Props>`
  font-size: ${({ theme }) => theme.size.mediumLarge};
`;

export default Icon;
