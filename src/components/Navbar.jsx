import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 90%;
  padding: 0 10px;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ContentWrapper>
        <h2>E-Shop</h2>
      </ContentWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
