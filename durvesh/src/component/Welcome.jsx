import { useState } from "react";
function Welcome() {
    
    const[counter,setCounter]=useState("durvesh")
    console.log(counter)
    return (
        <div>
            <button onClick={()=>setCounter("Nakhawa")}>Welcome</button>
        </div>
    )
}


export default Welcome;