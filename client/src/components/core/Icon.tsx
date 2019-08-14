import styled from "styled-components";

const ACCOUNT_CIRCLE = "account_circle";
const GROUP = "group";

interface Props {
  type: typeof GROUP | typeof ACCOUNT_CIRCLE;
}

const Icon = styled.i.attrs(({ type }: Props) => ({
  className: "material-icons",
  children: type
}))<Props>`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export default Icon;
