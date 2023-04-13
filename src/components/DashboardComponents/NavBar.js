import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuButton
        onMouseEnter={handleMenuMouseEnter}
      >
        <ion-icon name="menu-outline" size="large"></ion-icon>
      </MenuButton>
      <Sidebar isOpen={isOpen} onMouseLeave={handleMenuMouseLeave}>
        <Nav>
          <Link style = {{textDecoration:"none"}} to = {"/searchanimes"}><NavItem>Buscar Animes</NavItem></Link>
          <Link style = {{textDecoration:"none"}} to = {"/dashboard"}><NavItem>Meus Animes</NavItem></Link>
        </Nav>
      </Sidebar>
    </>
  );
}

const MenuButton = styled.button`
background-color: black;
display: flex;
align-items: center;
  color: white;
  width: 70px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  ion-icon{
    width: 200px;
    size: 200px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  width: 150px;
  height: 100vh;
  background-color: black;
  transition: left 0.3s ease-in-out;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const NavItem = styled.div`
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: gray;
  }
`;