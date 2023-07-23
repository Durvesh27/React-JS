import ResumeBuilder from "./ResumeBuilder"
function Resume(){
const resume=
    [{
named:"Durvesh Nakhawa",
address:"Karanja Navapada Uran Navi Mumbai",
mobile:"8369041343",
qualification:[{exam:"SSC",board:"Maharshtra Board",year:2014,percent:"77%"},
{exam:"HSC",board:"Maharshtra Board",year:2016,percent:"60%"},
{exam:"B.E",board:"Mumbai University",year:2020,percent:"75%"}],
skills:["HTML","CSS","javaScript"],
declaration:"Above info is correct"
    }]

return(
<div>
{
    resume.map(val=>(
    <ResumeBuilder key={val} name={val.named} address={val.address} mobile={val.mobile} qualify={val.qualification} skills={val.skills} declare={val.declaration}/>
    ))
}

</div>
)
}
export default Resume