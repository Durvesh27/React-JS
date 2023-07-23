function Map(props){
    console.log(props.myUsers,"here")
    return(
        <div>
            {props.myFriends && props?.myFriends.map((str)=>(
             <div key={str}>
             <h2>{str}</h2>
             </div>
             ))}
            <button onClick={()=>props?.setMyUsers([...props.myUsers,"Awdiz"])}>Add user</button>
            {props.myName&&props.myName}
        </div>

        
    )


}
export default Map