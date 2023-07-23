import React from 'react'
import data from './../src/data/myProducts.json'
const DeclarativeWay=()=>{
return(
<div>
    {
        data.map((item)=>(
        <div>
        <h2>Name:{item.name}</h2>    
        <h2>Description:{item.description}</h2>    
        <h2>Price:{item.price}</h2>  
        </div>
  
        ))
    }
</div>
)
}
export default DeclarativeWay