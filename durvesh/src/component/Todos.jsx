import { memo } from "react"

function Todos({todos,addTodos}){
console.log("Calling inside Todo")
return(
<div>
    <h1>Todos here</h1>
    {
        todos.map((element)=>(
            <div key={element}>
       <p>{element}</p>

            </div>
        ))
    }
    <button onClick={addTodos}>Add Todo</button>
</div>
)
}
export default memo(Todos)