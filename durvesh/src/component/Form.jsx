import React, { useState } from 'react'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {
const[userData,setUserData]=useState({name:"",email:"",password:""})
// const[logged,setLogged]=useState(false)
const router=useNavigate();

const handleChange=(event)=>{
setUserData({...userData,[event.target.name]:event.target.value})
}

const handleSubmit=(event)=>{
event.preventDefault();
if(userData.name && userData.email && userData.password){
const array=JSON.parse(localStorage.getItem("Users")) || [];
let data={name:userData.name,email:userData.email,password:userData.password,cart:[]}
for(let i=0;i<array.length;i++){
if(array[i].name===userData.name) {
setUserData({name:"",email:"",password:""})
return alert(`Account already exists`)   
}   
}
array.push(data)
localStorage.setItem("Users",JSON.stringify(array))
setUserData({name:"",email:"",password:""})
router("/login")
alert("Account created Successfully")
}else{
  alert("Please fill all details")
}

}
  return (
    <>
    <div className='form'>
        <h2 style={{textAlign:"center"}}>Registeration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" name="name" onChange={handleChange} value={userData.name} className='input'/><br/>
        <label>Email</label><br/>
        <input type="email" name="email" onChange={handleChange}value={userData.email} className='input' /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" onChange={handleChange} value={userData.password} className='input' /><br/>
        <input type='submit' value="Register"/>
        <p style={{fontSize:"15px",marginTop:"5px",fontWeight:600}}>Already have an account <Link to="/login">Login</Link></p>
      </form>
    </div>
    </>
  )
}

export default Form
