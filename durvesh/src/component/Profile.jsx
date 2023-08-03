import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'


const Profile = () => {
const{login}=useContext(AuthContext)
const[userData,setUserData]=useState({})
const router=useNavigate()
useEffect(()=>{
const current=JSON.parse(localStorage.getItem("Current-User"))
if(!current)  {
    router("/")
}
const users=JSON.parse(localStorage.getItem("Users"))
if(current && users){
    users.forEach( (pro)=>{
       if( pro.email===current.email && pro.password===current.password){
        setUserData(pro)
       }
    })
}
},[])

const handleChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value})
    }
const handleSubmit=(e)=>{
e.preventDefault();
const current=JSON.parse(localStorage.getItem("Current-User"))
const users=JSON.parse(localStorage.getItem("Users"))
users.forEach((pro)=>{
    if( pro.email===current.email && pro.password===current.password){
     pro.name=userData.name;
     pro.password=userData.password;
     current.name=userData.name;
     current.password=userData.password
    }
 })
 login(current)
 localStorage.setItem("Current-User", JSON.stringify(current))
 localStorage.setItem("Users", JSON.stringify(users))
 setUserData({})
 alert("Profile updated")
}
  return (
    <div>
          <div className='form'>
        <h2 style={{textAlign:"center"}}>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Change Name</label><br/>
        <input type="text" name="name" onChange={handleChange}  className='input'/><br/>
        <label>Change Password</label><br/>
        <input type="password" name="password" onChange={handleChange}  className='input' /><br/>
        <input type='submit' value="Submit"/>
      </form>
    </div>
    </div>
  )
}

export default Profile
