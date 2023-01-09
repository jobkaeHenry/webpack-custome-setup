import styled from '@emotion/styled';
const Navbar = () => {
  return <NavWrapper>Navbar</NavWrapper>;
};

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  gap: 16px;
  border-bottom: 1px solid #efefef;
`;
export default Navbar;
