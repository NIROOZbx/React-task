import Child from "./Child"
function Parent(){

  function greet(){
      <h1 style={{backgroundColor:"black"}}>Hello world</h1>
  };
    return(
        <>
    <Child  onGreet={greet} name="jack" age={89} place=" america" isHuman={true}/>
    </>
    )
}
export default Parent