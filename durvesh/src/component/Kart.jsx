import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
const Kart = () => {
const[Kart,setKart]=useState([])
const[logged,setLogged]=useState(false)
const[final,setFinal]=useState(0)
const user=JSON.parse(localStorage.getItem("Current-User"))
const data=JSON.parse(localStorage.getItem("Users"))
const{state,login,logout}=useContext(AuthContext)
const router=useNavigate()
useEffect(() => {
  if (state?.user?.email) {
      setLogged(true);
  } else {
      setLogged(false);
  }
  },[state])

// console.log(user)
useEffect(()=>{
    if(user?.email){
        for(let i=0;i<data.length;i++) {
        if(data[i].email===user?.email){
        setKart(data[i].cart);
        break;
        }
        } 
        }else{
            alert("Please login")
        }
},[])
useEffect(()=>{
    if(user){
        setLogged(true)
        }
},[])

useEffect(()=>{
if(Kart.length){
var totalPrice=0;
Kart.forEach((i)=>{
totalPrice+=i.price;
})
}
setFinal(totalPrice)
},[Kart])

function delItem(id){
// console.log(data)
// console.log(user)

let update=Kart.filter((item)=>{
return id!==item.id
})
// console.log(update)
data.forEach((ele)=>{
  if(ele.email===user.email && ele.password===user.password){
    ele.cart=update;

  }
})
// console.log(data)
localStorage.setItem("Users",JSON.stringify(data))
alert("Item Deleted")
setKart(update)
}

function ClearCart(){
  data.forEach((ele)=>{
    if(ele.email===user.email && ele.password===user.password){
      ele.cart=[];
  
    }
  })
  localStorage.setItem("Users",JSON.stringify(data))
  alert("Proceed to Checkout")
  setKart([])
  }



  return (
    <>

      {
        logged && Kart?.length ?
        <div style={{background:"#EFEFEF"}}>

        
        <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between",padding:"40px 0"}}>
        <div style={{width:"65%",padding:"20px",background:"white"}}>
        <h2 style={{margin:"15px"}}>My Bag <span style={{fontWeight:600,marginLeft:"50px",fontSize:"20px"}}>{Kart.length}  Items</span></h2>
        {
        Kart.length && Kart.map(pro=>(
    
            <div style={{borderTop:"1px solid grey",width:"100%",padding:"15px",boxSizing:"border-box",position:"relative",display:"flex"}} key={pro.id} >
            <img src={pro.image} alt="" style={{width:"22%",height:"200px",marginRight:"20px"}}/> 
            <i class="fa-solid fa-xmark fa-lg" style={{position:"absolute",top:"20px",right:"10px"}} onClick={()=>delItem(pro?.id)}></i>
            <div style={{padding:"10px 0",boxSizing:"border-box",lineHeight:"30px"}}>
             <h4 style={{textTransform:"uppercase"}}>{pro.category}</h4>
             <p>{pro.title}</p>
             <h4>{pro.price}$</h4>
            </div>

            </div>


        ))
        }
        </div>
        
        <div style={{width:"30%"}}>
          <div style={{padding:"20px",boxSizing:"border-box",background:"white"}}>

          
          <h2 style={{padding:"15px",borderBottom:"1px solid grey"}}>Total</h2>

          <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
          <h3>Sub-Total</h3>
          <h3>{final}$</h3>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
          <h3>50% Discount</h3>
          <h3>-{final/2}$</h3>
          </div>

          <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
          <h3>Total</h3>
          <h3>{final/2}$</h3>
          </div>

          <button style={{width:"100%",color:"white",fontWeight:"600",fontSize:"17px",padding:"8px 10px ",background:"green",marginTop:"10px"}} onClick={ClearCart}>Checkout</button>
        
          </div>
             </div>

             </div>

            </div>
            
            :
            <div style={{height:"607px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
            <h2 style={{textAlign:"center"}}>Cart Empty</h2>
            <h3 style={{color:"grey"}}>Add Items to the Cart!</h3>
            </div>
  
            </div>
      }










    



    </>
  )
}

export default Kart
