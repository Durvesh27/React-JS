import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Backend.css'
function SingleBackend(){
const[item,setItem]=useState({})
const[logged,setLogged]=useState(false);
const[userEmail,setUserEmail]=useState("")
const {single}=useParams();

    useEffect(()=>{
        const  getResponse =async()=>{
        let response= await fetch(`https://fakestoreapi.com/products/${single}`)
        let data=await response.json();
        setItem(data)
        }
        getResponse()
    },[])
useEffect(()=>{
    var user=JSON.parse(localStorage.getItem("Current-User"))
    if(user){
    setLogged(true);
    setUserEmail(user.email)
    }
},[])

function addCart(){
if(logged){
    let users=JSON.parse(localStorage.getItem("Users"))
    for(let i=0;i<users.length;i++){
    if(users[i].email===userEmail){
    users[i].cart.push(item)
    alert("Item Added to Cart")
    localStorage.setItem("Users",JSON.stringify(users))
    break;
    }
    }
}else{
    alert("Login for Shopping")
}


}
if (!Object.keys(item).length > 0) return <h2 className="loading">Loading...</h2>
!Object.keys(item).length > 0 && <h1 style={{color:"blue"}}>Not found...</h1>
return(
    <>  
    <div>
        <h2 style={{margin:"20px 0"}}>Product Details</h2>
        <div className="single-div">
        <img src={item?.image} alt="" />
        <div className="single-right">
     <h2>{item?.title}</h2>
     <h2>{item?.price}$</h2>
     <h3 style={{marginTop:"30px",color:"grey"}}>{item?.description}</h3>
     <h3 style={{marginTop:"30px",textTransform:"uppercase"}}>{item?.category}</h3>
     <button onClick={addCart} style={{padding:"5px 10px",backgroundColor:"black",color:"white",fontWeight:600,borderRadius:"5px"}}>Add to Cart</button>
        </div>
        </div>
    </div>
    </>
)

}
export default SingleBackend;