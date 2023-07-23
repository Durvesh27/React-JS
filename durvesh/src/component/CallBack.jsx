import { useCallback, useState } from "react"
import Todos from './Todos'
function CallBack(){
const [todos,setTodos]=useState(["Eating lunch","Doing Assignment"])
const[count,setCount]=useState(0)

// function addTodos(){
// setTodos([...todos,"Come here"])
// }
const addTodos=useCallback(()=>{
setTodos([...todos,"Come here"])
},[todos])
return(
    <div>
        <Todos todos={todos} addTodos={addTodos}/>
        <h1>Counter:{count}</h1>
        <button onClick={()=>setCount(item=>item+1)}>Plus 1</button>
    </div>
)
}
export default CallBack