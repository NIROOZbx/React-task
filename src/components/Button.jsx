import { useState } from "react";
import "./Button.css";
function Counter() {
  const [value, counter] = useState(0);
  const[isHuman,human]=useState(false)
  const[hide,hideElement]=useState(false)
  const increment=function(){
    if(value<10){ }
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

  const hideEle=function(){
    hideElement(!hide)
  }

  return (
   
    <div className="container"  style={isHuman?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      <div className={isHuman?"first":"second"}> </div>
      <h2 style={isHuman?{color:"white"}:{color:"black"}}>Counter Button</h2>
      <span style={isHuman?{color:"white"}:{color:"black"}}>{value}</span>
      <span style={isHuman?{color:"white"}:{color:"black"}}>{name}</span>
     <span style={hide?{display:"none",color:"green"}:{visibility:"visible",color:"green"}}>Hello world</span>
      <br></br>
      <div className="div2">
        <button onClick={increment}  className="btn" > +</button>
        <button  onClick={decrement}className="btn"> - </button>
        <button onClick={reset}className="btn">Reset</button>
        <button className="btn" onClick={boolChange}>Change</button>
       <button className="btn" onClick={hideEle}>Hide</button>
      </div>
    </div>
  );
}
export default Counter;
