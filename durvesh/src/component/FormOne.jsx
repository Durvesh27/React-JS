import React from "react"
import { useState } from "react"

let FormOne=()=>{
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
function toSetName(event){
setName(event.target.value)
}
function toSetEmail(event){
setEmail(event.target.value)
}
function toSetPassword(event){
setPassword(event.target.value)
}
function submitData(event){
event.preventDefault()
if (!name) {
    return alert("Name is required!")
}
if (name.length < 6) {
    return alert('Name must more than 5 digit')
}
if (!email) {
    return alert("Email is required!")
}
if (!password) {
    return alert("Password is required")
}
if (password.length < 6) {
    return alert("Password must be more than than 5 digit")
}
const res={data:{message:"ok",status:200}}
if(res.data.message=="ok"){
alert("Registeration Successfull")
}
else{
alert("Error,Please try Again")
}
    }
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
        <form onSubmit={submitData}>
            <h2>User Registeration form</h2>
            <label>Name:</label><br/>
            <input type="text" onChange={toSetName} /><br/>
            <label>Email:</label><br/>
            <input type="email" onChange={toSetEmail}/><br/>
            <label>Password:</label><br/>
            <input type="password" onChange={toSetPassword}/><br/>
            <input type="submit" value="Register"/>
        </form>
        </div>
        )
}
export default FormOne

