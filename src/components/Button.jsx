import { useState } from "react";
import "./Button.css";
function Counter() {
  const [value, counter] = useState(0);
  const[isHuman,human]=useState(false)
  const increment=function(){
    counter(value+1)
  }

   const decrement=function(){
    if(value>0){ 
    counter(value-1)
    }
  }
  const reset=function(){
    counter(0)
  }

  const boolChange=()=>{
    human(!isHuman)
  }

  return (
   
    <div className="container"  style={isHuman?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      <h2 style={isHuman?{color:"white"}:{color:"black"}}>Counter Button</h2>
      <span style={isHuman?{color:"white"}:{color:"black"}}>{value}</span>
      <span style={isHuman?{color:"white"}:{color:"black"}}>{name}</span>
      <span></span>
      <br></br>
      <div className="div2">
        <button onClick={increment}  className="btn" > +</button>
        <button  onClick={decrement}className="btn"> - </button>
        <button onClick={reset}className="btn">Reset</button>
        <button className="btn" onClick={boolChange}>Change</button>
      </div>
    </div>
  );
}
export default Counter;
