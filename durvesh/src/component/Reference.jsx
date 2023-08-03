import React, { useContext, useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MyContext } from './Context'

const Reference = () => {
const[name,setName]=useState('')
const getRef=useRef()
const {toggle,setToggle}=useContext(MyContext)
function focus(){
getRef.current.focus()    
}
 
const boxStyle={  
  width:"100%",
  height:"50px",
  border:"1px solid black",
  backgroundColor: toggle? "cyan":"green"
}
function onChange(){
setToggle(!toggle)
// console.log(toggle)
}
  return (
    <div style={{width:"20%",margin:"auto",paddingTop:"25px"}}>
    <h3 onClick={focus} style={{marginBottom:"10px"}}>Enter Your Name</h3>
    <input ref ={getRef}  type="text" value={name} onChange={e=>setName(e.target.value)} style={{width:"100%",height:"30px",fontSize:"16px"}}/>
    <div>My Name is {name}</div>

    <div style={boxStyle} >
    box
    </div>
    <button onClick={onChange}>change</button>

    </div>
  )
}

export default Reference
