import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Form.css'
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
function Login() {
const{state,login}=useContext(AuthContext)

const[data,setData]=useState({email:"",password:""})
const router=useNavigate();


function handleChange(event){
setData({...data,[event.target.name]:event.target.value}) 
}
function handleSubmit(event){
event.preventDefault();

if(data.email && data.password){
    let getData=JSON.parse(localStorage.getItem("Users"))
    let flag=false;
    for(let i=0;i<getData.length;i++){
     if(getData[i].email===data.email && getData[i].password===data.password){
        flag=true;
        break;
     }
}
if(flag===false){
alert("Please enter valid Credentials")
setData({email:"",password:""})
}
else{
// localStorage.setItem("Current",JSON.stringify(data))
login(data)
alert("logged in Successfully")
router('/')
}

}else{
alert("Please fill all the details")
}
}
    return (
        <div className="form">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <form onSubmit={handleSubmit}>
                <label >Email</label><br/>
                <input type="email" name="email" onChange={handleChange} value={data.email} className="input"/><br/>
                <label >Password</label><br/>
                <input type="password" name="password" onChange={handleChange} value={data.password} className="input"/><br/>
                <input type="submit" value="Login"/>
                <p style={{fontSize:"15px",marginTop:"5px",fontWeight:600}}>New member <Link to="/form">Register</Link></p>
            </form>
        </div>
    )
}

export default Login;