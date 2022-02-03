import React from "react";
import Count from "./Count";
import styled from "styled-components";

function Counter() {
  return (
    <Wrapper>
      <Center>
        <Count />
      </Center>
    </Wrapper>
  );
}

export default Counter;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: black;
  height: 100vh;
  width: 100%;
  align-items: center;
  text-align: center;
`;
const Center = styled.div`
  width: 50%;
  height: 50vh;
  background-color: #f4f4f4;
  box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
