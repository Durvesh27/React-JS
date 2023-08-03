import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Reference1 = () => {
    const[name,setName]=useState('')
    const getRef=useRef()
    const inputRef=useRef(0)
    
    useEffect(()=>{
    getRef.current=name;
    },[name])
    
    useEffect(()=>{
    inputRef.current+=1; 
    })


  return (
    <div style={{width:"20%",margin:"auto",paddingTop:"25px"}}>
    <h3  style={{marginBottom:"10px"}}>Rendering Count : {inputRef.current}</h3>
    <input ref ={getRef}  type="number" value={name} onChange={e=>setName(e.target.value)} style={{width:"100%",height:"30px",fontSize:"16px"}}/>
    <div>Present Value in State : {name} <br/>Previosly Stored Value :{getRef.current}</div>
    </div>
  )
}

export default Reference1
