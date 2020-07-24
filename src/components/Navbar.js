import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <h1>Lambda eats</h1>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/pizza"> Pizza</Link>
      </div>
    </NavbarContainer>
  );
}
