import React from "react";
import styled from "styled-components";

const HomeText = styled.div`
  text-align: center;
  background-image: url("../../Assets/Pizza.jpg");
  height: 100vh;
  width: 100%;
`;

export default function Home(props) {
  return (
    <HomeText>
      <h2>Welcome to Delicious Pizza!</h2>
    </HomeText>
  );
}
