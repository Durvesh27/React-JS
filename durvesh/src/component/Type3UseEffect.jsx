import { useEffect, useState } from "react";

function Type3UseEffect(){
const[counter,setCounter]=useState(0)
const[counter1,setCounter1]=useState(10)
useEffect(()=>{
    console.log("Code Executed")
},[counter])
return(
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter((item)=>item+1)}>Add 1</button>

        <h1>Counter:{counter1}</h1>
        <button onClick={()=>setCounter1((item)=>item+1)}>Add 1</button>
        
        <h1>Type3UseEffect</h1>
    </div>
)
}
export default Type3UseEffect;