import Child from "./Child"

function Parent(){

    const list=[{id:1,name:"Tata",model:"tiago",year:2014},
                {id:2,name:"BMW",model:"M5",year:2022},
                {id:3,name:"Audi",model:"rs8",year:2024},
                {id:4,name:"Tesla",model:"y",year:2019}]
    // const sortedList=list.sort((a,b)=>{
    //     return a.name.localeCompare(b.name)
    // })
     const list2=[{id:5,name:"honda",model:"highness",year:2014},
                {id:6,name:"bajaj",model:"pulsar",year:2022},
                {id:7,name:"suzuki",model:"access",year:2024},
                {id:8,name:"tvs",model:"jupiter",year:2019}]
    return(
       <>
    {list.length>0 && <Child updatedList={list}/>}
    <Child updatedList={list2}/>
    </>

   
    )
}
export default Parent