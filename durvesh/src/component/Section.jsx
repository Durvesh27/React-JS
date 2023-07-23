import { useState } from "react";

function Section(){
   const[userLogged,setUserLogged] =useState(false)
   console.log(userLogged)
   return(
    <div>
    <h2> User: {userLogged? <button>LOGOUT</button>:<button>LOGIN</button>}</h2>
    </div>
   )
}
export default Section;