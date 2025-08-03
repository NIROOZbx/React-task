import { useState } from "react";

function ObjectChange(){

    const[car,carChange]=useState({name:"tata",model:"tiago",year:1994})
    const makeChange=(e)=>{
        carChange((c)=>({...c,name:e.target.value}))
    }
    return (
        <>
        <input type="text" onChange={makeChange}/>
        <h1>{car.year}-{car.name}-{car.model}</h1>
        </>
    )
}

export default ObjectChange