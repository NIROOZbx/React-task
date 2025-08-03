import { useState } from "react"


function FormHandling(){

const [name,changeName]=useState('')
const[names,previousNames]=useState([])
const[payment,handlePayment]=useState('')
const[color,colorChange]=useState("#FFFFFF")


const changingColor=(e)=>{
    colorChange(e.target.value)
}

const elementChange=(e)=>{
    changeName(e.target.value)
}
const updateName=function(){
    previousNames([name,...names])
}

const paymentDetails=(e)=>{
    handlePayment(e.target.value)
}

    return(
<>
        <input type="text" onChange={elementChange} />
        <h1 style={{backgroundColor:name}}></h1>
        <button onClick={updateName}>Submit</button>
        <h1>{names.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}</h1>
        <select onChange={paymentDetails}>
            <option>Select an option</option>
            <option>VISA</option>
            <option>CASH</option>
            <option>UPI</option>
        </select>

        <p>Payment:{payment}</p>
        <input type="color" onChange={changingColor}/>
        <p style={{backgroundColor:color}}>{color}</p>
    
       
        
    </>
        
    )
}
export default FormHandling