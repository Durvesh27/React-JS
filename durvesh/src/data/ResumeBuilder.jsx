
import './Resume.css'
import ResumeQualify from './ResumeQualify';
import ResumeSkills from './ResumeSkills';
function ResumeBuilder(props){


return(
    <div className="main-resume">
        <div className="profile">
        <h1>Resume</h1>
<h2>{props.name}</h2>
<p>{props.address}</p>
<p>{props.mobile}</p>
        </div>

<h2>Qualifications:</h2>
{
    props.qualify.map((ele)=>(
     <ResumeQualify exam={ele.exam} board={ele.board} percent={ele.percent} year={ele.year}/>
    ))
}

<h2>Skills:</h2>

{
    props.skills.map((ele1)=>(
<ResumeSkills skills={ele1}/>
    ))
}

<div className="declare">
    <span><b style={{fontSize:"20px"}}>Declaration: </b>{props.declare}</span>
</div>

    </div>
)
}
export default ResumeBuilder;