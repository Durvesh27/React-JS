import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home(){
const{state,login,logout}=useContext(AuthContext)
const [logged, setLogged] = useState(false);
const router = useNavigate()

useEffect(() => {
if (state?.user?.email) {
    setLogged(true);
} else {
    setLogged(false);
}
},[state])

// console.log(state)
    return(
        <>
        <div style={{height:"586px"}}>
        <h1 style={{textAlign:"center",marginTop:"20px"}}>Welcome to My Store </h1> 
        <h2 style={{textAlign:"center",color:"grey"}}>Happy Shopping!</h2> 
        {logged ? <div onClick={() => logout()} style={{textAlign:"center",fontWeight:600,fontSize:"18px"}}>Logout</div> : <div onClick={() => router('/login')} style={{textAlign:"center",fontWeight:600,fontSize:"18px"}}>Login</div>}
        </div>


</>
    )
}

export default Home;