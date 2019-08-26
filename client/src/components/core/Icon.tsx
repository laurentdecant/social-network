import styled from "styled-components";

const GROUP = "group";
const LIST = "list";
const PERSON = "person";
const SEND = "send";
const SHARE = "share";

interface Props {
  type: typeof GROUP | typeof LIST | typeof PERSON | typeof SEND | typeof SHARE;
}

const Icon = styled.i.attrs(({ type }: Props) => ({
  className: "material-icons",
  children: type
}))<Props>`
  font-size: ${({ theme }) => theme.size.mediumLarge};
`;

export default Icon;
