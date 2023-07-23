import { useState } from 'react';
import './DynamicClasses.css'
function DynamicClasses(){
    const[isButtonActive,setIsButtonActive]=useState(false);
    const handleButtonClick=()=>{
    setIsButtonActive(!isButtonActive)    
    }
return(
<button className={isButtonActive? "active-button":"inactive-button"} onClick={handleButtonClick}>
login now
</button>
)
}
export default DynamicClasses