import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import HeaderMenus from "./HeaderMenus";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenus />
    </StyledHeader>
  );
}

export default Header;
