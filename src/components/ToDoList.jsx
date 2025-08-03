import { useState } from "react"

function ToDoList(){

    const [add,addItem]=useState('')
    const [name,nameChange]=useState([])
     

   const updateItem=(e)=>{
    addItem(e.target.value)
    
    
   } 
   const addProps=()=>{
    nameChange([...name,add])
    addItem('')
    
   }
    return(
        <>
        <input onChange={updateItem} value={add}/>
        <button onClick={addProps}>Add item</button>
        <br></br>
        <br></br>
        <br></br>
        <h1>WHAT DO YOU WANT TO-DO</h1><hr></hr>
        <h1>{name.map((ele,index)=>{
           return <li key={index}>{ele} &nbsp;<input type="checkbox"/> &nbsp;<button>Delete</button></li>
        })}</h1>
        </>
    )

}
export default ToDoList