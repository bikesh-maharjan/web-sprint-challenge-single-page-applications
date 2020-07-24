import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
`;
const LogoTitle = styled.h1`
  font-size: 16px;
  color: lightgreen;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoTitle>PIZZALICIOUS</LogoTitle>
      <LinkContainer>
        <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/pizza"> PIZZA</StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}
