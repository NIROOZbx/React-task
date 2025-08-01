
function Child(props){
    return(
<>      
<button onClick={props.onGreet}>Click me</button>
<h1 style={props.isHuman ? { backgroundColor: "green" } : { backgroundColor: "yellow" }}>My name is {props.name} and my age is { props.age}
         and my address is { props.place} and is human {props.isHuman?"Yes":"No"}</h1>
  
     </>  
 )
}

export default Child