import { useReducer } from "react";

const reducer=(state,action)=>{
    switch(action.type){
    case "INCREEMENT":
    return {count:state.count+1}
    
    case "DECREEMENT":
    return {count:state.count-1}
    
    case "RESET":
    return {count:0}
    
    default:
        return state;
    }
    }
function UseReducer(){
const initialState={count:0}
const[state,dispatch]=useReducer(reducer,initialState)

const increement=()=>{
    dispatch({type:"INCREEMENT"})
}
const decreement=()=>{
    dispatch({type:"DECREEMENT"})
}
const reset=()=>{
    dispatch({type:"RESET"})
}

return(
    <div>
        <h2>count:{state.count}</h2>
        <button onClick={increement}>Increement</button>
        <button onClick={decreement}>Decreement</button>
        <button onClick={reset}>Reset</button>
    </div>
)
}
export default UseReducer;