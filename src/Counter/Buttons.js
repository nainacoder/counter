import React from "react";
import styled from "styled-components"
function Buttons(props) {
  const { handleIncrement, handleDecrement } = props;

  return (
    <div>
      <Increment onClick={handleIncrement}>+</Increment>&nbsp;&nbsp;&nbsp;&nbsp;
      <Decrement onClick={handleDecrement}>-</Decrement>
    </div>
  );
}

export default Buttons;
const Increment = styled.button`
border-radius:50%;
width:40px;
min-height:35px;
color:#fff;
font-weight:bold;
font-size:30px;
border-color:transparent;
background-color:grey;
border:none;
outline:none;
box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
&:hover{
    background-color:green;
}
`
const Decrement = styled.button`
border-radius:50%;
width:35px;
min-height:35px;
color:#fff;
font-weight:bold;
font-size:30px;
border-color:transparent;
background-color:grey;
border:none;
outline:none;
box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
&:hover{
    background-color:red;
}
`