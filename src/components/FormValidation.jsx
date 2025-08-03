import { useState } from "react"

function FormValidation(){

    const[cars,addCar]=useState([])
    const[model,modelGet]=useState('')
    const[year,yearGet]=useState('')
    const[brand,brandGet]=useState('')

    const collectCarDetails=()=>{
        const arr={years:year,brands:brand,models:model}
        addCar([...cars,arr])

        modelGet('')
        yearGet('')
        brandGet('')
    }
    
    const modelDetails=(e)=>{
        modelGet(e.target.value)
    }
    const yearDetails=(e)=>{
        yearGet(e.target.value)
    }
    const brandDetails=(e)=>{
        brandGet(e.target.value)

    }

    return(
        <>
        <input type="text" placeholder="Car brand" onChange={brandDetails} value={brand} />
        <br></br>
        <br></br>
        <input type="number" placeholder="Car year" onChange={yearDetails} value={year}/>
        <br></br>
        <br></br>
        <input type="text" placeholder="Car model" onChange={modelDetails} value={model}/>
        <br></br>
        <br></br>
        
       
        <button onClick={collectCarDetails}>Add details</button>

        <ul>{cars.map((ele,index)=>{
            return <li key={index}>{ele.models}&nbsp;{ele.brands}&nbsp;{ele.years}</li>
        })}</ul>
        </>

    )

}
export default FormValidation