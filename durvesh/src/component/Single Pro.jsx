import { useParams } from "react-router-dom";

function SinglePro(){
    const data=useParams();
    console.log(data,"-data")
return(
   <div>
    <h1>Single Products</h1>
    <h2>{data.id && data.id}</h2>
   </div>
)
}
export default SinglePro