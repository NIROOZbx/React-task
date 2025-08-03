import { useEffect,useState } from "react"
import './fetch.css'

function FetchData(){

    const[data,setData]=useState([])
    useEffect(()=>{
    const run=async function(){ 
        try{ 
       let data= await fetch("https://dummyjson.com/quotes?limit=10")
       let text=await data.json()
       setData(text.quotes)
       }catch(e){
         console.log("eroor",e)

       }
    }
        run()
    },[])
   

   
      
    return(
        <>
        <div className="cont">
            <h1 style={{textAlign:"center"}}>QUOTES</h1>
            <br></br>
            <br></br>
        <ul>{data.map((ele)=>{
            return <li key={ele.id}>{ele.quote.toUpperCase()}</li>

        })}</ul>
        </div>

        </>
    )

}
export default FetchData