function ResumeQualify({exam,board,year,percent}){
return(
<div className="qualify">
<ul>
<li>
<h3>{exam}</h3>
</li>
</ul>
<p>{board}</p>
<p>{percent} & {year}</p>
</div>
)
}
export default ResumeQualify;