import styled from "styled-components";

const GROUP = "group";
const PERSON = "person";
const SEND = "send";

interface Props {
  type: typeof GROUP | typeof PERSON | typeof SEND;
}

const Icon = styled.i.attrs(({ type }: Props) => ({
  className: "material-icons",
  children: type
}))<Props>`
  font-size: ${({ theme }) => theme.size.mediumLarge};
`;

export default Icon;
