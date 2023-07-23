import { useEffect, useState } from "react";

function Type2UseEffect(){
const[counter,setCounter]=useState(0)
useEffect(()=>console.log("Hello Type2"),[])
// alert("Welcome Home")
function add(){
    setCounter((item)=>item+1)
}
return(
    <div>
        <h1>{counter}</h1>
        <button onClick={add}>Counter Add</button>
        <h1>Type2UseEffect</h1>
    </div>
)
}
export default Type2UseEffect;