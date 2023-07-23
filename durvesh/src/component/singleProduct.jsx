import { useParams } from "react-router-dom"

function SingleProduct(){
const data=useParams()
// console.log(data,"-data")
return(
    <div>
    {data && data.durvesh}    
    </div>
)
}
export default SingleProduct