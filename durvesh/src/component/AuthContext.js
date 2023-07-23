import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { Router } from "react-router-dom";

export const AuthContext=createContext();
const initialState={user:null};

function reducer(state,action){
switch(action.type){
case "login":
return{user:action.payload}

case "logout":
return{user:null}
} 
}

const AuthProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialState)

const login=(data)=>{
if(data){
localStorage.setItem("Current-User",JSON.stringify(data))
dispatch({
type:"login" ,
payload:data
})
}
}

const logout=()=>{
localStorage.removeItem("Current-User")
dispatch(
{
type:"logout"
}
)
}

useEffect(()=>{
const logged=JSON.parse(localStorage.getItem("Current-User"))
if(logged){
dispatch(
{type:"login",
payload:logged}
)
}
},[])



return(
    <AuthContext.Provider value={{state,login,logout}}>
    {children}
    </AuthContext.Provider>
)
}
export default AuthProvider;