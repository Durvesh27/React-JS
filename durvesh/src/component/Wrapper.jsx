function MyComponentWithWrapper ({name}){
    return(
        <div style={{backgroundColor: 'green', padding: '20px' }}>
        {name}
    </div>
    )

}
function Wrapper(){
return < MyComponentWithWrapper name={"Durvesh"}/>
}
export default Wrapper