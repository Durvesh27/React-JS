import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormTwo=()=>{
const [userData,setUserData]=useState({name:"",email:"",password:""})
const router=useNavigate()
function handleChange(event){
console.log(event.target.value)
console.log(event.target.name)
setUserData({...userData,[event.target.name]:event.target.value})
}
function onFormSubmit(event){
event.preventDefault();
if(!userData.name) return alert("Enter your Name!")
if(!userData.email) return alert("Enter your Email!")
if(!userData.password) return alert("Enter your Password!")
if(userData.password.length<5) return alert("Length of Password should be greater than 5")
setUserData({name:"",email:"",password:""})
alert("Registeration Successful")
router('/')
}
return (
    <div>   <form onSubmit={onFormSubmit}>
            <label>Name:</label><br/>
            <input type="text" value={userData.name} name="name" onChange={handleChange} placeholder="Enter Your Name"/><br/>
            <label>Email:</label><br/>
            <input type="email" value={userData.email} name="email" onChange={handleChange} placeholder="Enter Your Email"/><br/>
            <label>Password:</label><br/>
            <input type="password" value={userData.password} name="password" onChange={handleChange} placeholder="Enter Your password" /><br/>
            <input type="submit" value="Register"/>
            </form>
    </div>
)
}
export default FormTwo