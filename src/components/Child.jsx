// import './Props.css'
// function Child(props){

// const welcome=<h1 className="welcome">Welcome {props.name}</h1> 
// const error=<h1 className="error">No username info</h1>
// console.log(props)
    
//  return props.isLoggedIn ? welcome: error
 
// }

// export default Child

//--------------------------------------------------------------------------------------------------------------------------------------------//

import { useState } from 'react'
import './Props.css'
function Child(props){
  
  const[bgColor,changeBackground]=useState(false)

  const colorChange=()=>{
    changeBackground(!bgColor)
  }
  const newList = props.updatedList.filter(ele => ele.year > 2020).map(ele => <li key={ele.id}>{ele.name.toUpperCase()}&nbsp;:&nbsp;{ele.model.toUpperCase()}&nbsp;:{ele.year}</li>);

  return(<>
    <h1 style={bgColor?{backgroundColor:"aqua",display:"flex"}:{backgroundColor:"lightblue",width:"fit-content"}}>{newList}</h1>
    <button onClick={colorChange}>Change</button>
    </>
  )
}

export default Child    