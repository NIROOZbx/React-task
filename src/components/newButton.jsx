import { useState } from "react"
import './Props.css'

function Button(){
const arr=["green","blue","grey","black","red","orange"]
const[element,nextElement]=useState(arr[0])

const click=function(){
  const index=arr.indexOf(element)
  nextElement(arr[index+1])
}
const prev=function(){
   const index=arr.indexOf(element)
  nextElement(arr[index-1])
}

    return(
      <>
      <div className="div" style={{backgroundColor:element}}></div>
      <button onClick={click}>NEXT</button>
      <button onClick={prev}>PREV</button>
      </>
    )
}
export default Button