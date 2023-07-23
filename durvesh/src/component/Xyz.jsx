import { useNavigate } from "react-router-dom"

function Xyz(){
let router=useNavigate()
function goTo(){
    router('/single-pro/12345')
}
return(
<div>
    <button onClick={goTo}>Click here</button>
</div>
)
}
export default Xyz