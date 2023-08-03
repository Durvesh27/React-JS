
 
import React from 'react'
import { useState } from "react"
import { createContext } from "react"
export const MyContext=createContext()

const Context = ({children}) => {
    const[toggle,setToggle]=useState(true)
    return (
    <MyContext.Provider value={{toggle,setToggle}}>
    {children}
    </MyContext.Provider>
    )
}

export default Context


