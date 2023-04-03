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
          <NavItem href="#">Meus Animes</NavItem>
        </Nav>
      </Sidebar>
    </>
  );
}

const MenuButton = styled.button`
background-color:inherit ;
display: flex;
align-items: initial;
  color: black;
  width: 100px;
  height: 50vh;
  padding: 10px;
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

const NavItem = styled.a`
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: gray;
  }
`;