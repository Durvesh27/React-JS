import { useNavigate } from "react-router-dom"

function Params(){
    const router=useNavigate()
    function goto(){
    router('/singleProduct/12345')    
    }
    return(
        
   <div>
    <button onClick={goto}>
        Go To Single Products
    </button>
    <h3>Params</h3>
   </div>
    )
}
export default Params