import React from "react";
import styled from "styled-components";

const HomeText = styled.div`
  background-image: url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  align-items:center;
  justify-content: center;
  color: white;
  font-size: 2rem;

`;

export default function Home(props) {
  return (
    <HomeText>
      <h2>Welcome to Delicious Pizza!</h2>
    </HomeText>
  );
}
