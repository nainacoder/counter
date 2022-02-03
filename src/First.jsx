import React from "react";
import styled from "styled-components";
import Counter from "./Counter/Counter";

import{BrowserRouter,Route} from "react-router-dom";
function First() {
  return (
    <>
    
      <MainWrapper>
        <Wrapper>
        <BrowserRouter>
          <Cards
          onClick={()=><Route exact path="./counter"  component={<Counter/>}/>}
          >
            <Text >Explore Counter Page </Text>
          </Cards>

          <Cards>
            <Text>Explore TODO</Text>
          </Cards>
          </BrowserRouter>
        </Wrapper>
      </MainWrapper>
     
    </>
  );
}

export default First;
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 70vh;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;
const Cards = styled.div`
  width: 30%;
  height: 30vh;
  background-color: black;
  box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  
`;

const Text = styled.button`
  color: red;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 100px;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: yellow;
  }
`;
