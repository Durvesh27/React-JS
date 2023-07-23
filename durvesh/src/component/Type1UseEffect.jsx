import { useEffect, useState } from "react";

function Type1UseEffect(){
const [counter,setCounter]=useState(0)
useEffect(()=>console.log("Hello Type1"))

function add(){
setCounter((item)=>item+1)
}

return(
    <div>
        <h1>{counter}</h1>
        <button onClick={add}>Add Counter</button>
        <h1>Type1UseEffect</h1>
    </div>
)
}
export default Type1UseEffect;