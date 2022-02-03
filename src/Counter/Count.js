import React from "react";
import Buttons from "./Buttons";
import styled from "styled-components"

function Count() {
  const [count, setCount] = React.useState(0);
// const [color,setColor] =React.useState("red")
  const handleIncrement = () => {
    count === 15 ? setCount(15) : setCount(count + 1) 
    // && setColor(color="green");
    
  };

  const handleDecrement = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
  };

//   const countColor = () =>{
//     handleIncrement? <span style={color="green"} />: handleDecrement? <span style={color="red"}/>: null;
//   }

  return (
    <div>
      <Heading>Count :&nbsp;{count}</Heading>
      <Spacer/>
      <Buttons
    //   countColor={countColor}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}

export default Count;

const Heading = styled.h2`
color:grey;
`
const Spacer=styled.div`
height:30px;
`