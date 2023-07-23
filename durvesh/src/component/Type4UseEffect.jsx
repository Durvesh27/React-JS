import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type4UseEffect(){
const[counter,setCounter]=useState(0)
const[counter1,setCounter1]=useState(10)
const[counter2,setCounter2]=useState(20)
const router=useNavigate();
useEffect(()=>{
    console.log("Code Executed")
    if(counter2==25){
        router('/')
    }
},[counter,counter2])

return(
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter((item)=>item+1)}>Add 1</button>

        <h1>Counter:{counter1}</h1>
        <button onClick={()=>setCounter1((item)=>item+1)}>Add 1</button>

        <h1>Counter:{counter2}</h1>
        <button onClick={()=>setCounter2((item)=>item+1)}>Add 1</button><br/>

        
        <button onClick={()=>router('/login')}>Redirect to Login</button>


        
        <h1>Type4UseEffect</h1>
    </div>
)
}
export default Type4UseEffect;