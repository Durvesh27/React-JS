import { useMemo, useState } from "react"


function UseMemo(){
const [todos,setTodos]=useState(["Eat lunch","Do Assignment"])
const[count,setCount]=useState(0)
// const Number=expensiveCalc(count)
const Number=useMemo(()=>{
return expensiveCalc(count);
},[count])
function addTodo(){
setTodos([...todos,"New Todo"])
}
return(
    <div>
       <h1>Expensive calcultion:{Number}</h1>
       <h1>Counter:{count}</h1>
       <button onClick={()=>setCount(prev=>(prev+1))}>Plus 1</button>
       <h1>Todos</h1>
       {
        todos.map((val,i)=>(
         <h3 key={i}>{val}</h3>   
        ))
       }
       <button onClick={addTodo}>Add Todo</button>
    </div>
)
}
const expensiveCalc=(num)=>{
    console.log("Inside Complex Calculation") 
    for(let i=0;i<100000;i++){
    num+=1;
    }
    return num;
    }
export default UseMemo