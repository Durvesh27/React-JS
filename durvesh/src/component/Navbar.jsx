import { useContext } from "react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext";

function Navbar() {
    const { state, login, logout } = useContext(AuthContext);
    const [user, setUser] = useState({})
    // const[logged,setLogged]=useState(false)

    const router = useNavigate();

    useEffect(() => {
        // const user=JSON.parse(localStorage.getItem("Current"));
        // if(user){
        // setLogged(true);
        // setEmail(user.email)
        if (state?.user) {
            setUser(state?.user)
        } else {
            setUser({});
        }
    }, [state])


    let data = JSON.parse(localStorage.getItem("Users"))
    let durvesh = data.find((val) => {
        // return email===val.email;   
        return user?.email === val.email;
    })

    function addCart() {
        if (user?.email) {
            router("/products-backend")
        } else {
            alert("login first")
        }
    }

    // function logout(){
    //     localStorage.removeItem("Current")
    //     setLogged(false)
    //     alert("Logout Sucessfull")
    //     }
    // function login(){
    //     router("/login")
    // }
    // console.log(user)
    function goCart() {
        if (user?.email) {
            router("/kart")
        } else {
            alert("login first")
        }
    }
    function getHome() {
        router("/")
    }

    return (
        <div style={{ border: "1px solid grey", display: "flex", justifyContent: "space-between", alignItems: "center", background: "black", color: "white", fontWeight: "600", padding: "10px", boxSizing: "border-box" }}>
            <div style={{ width: "75%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 style={{ cursor: "pointer" }} onClick={getHome}>MyStore</h1>
                {
                    user?.email ?
                        <h4 style={{ marginRight: "70px" }}>Hello!  <span style={{ fontWeight: 700 }}>
                            {durvesh?.name}
                        </span></h4> :
                        null
                }
            </div>

            <div style={{ display: "flex", width: "25%", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ cursor: "pointer" }} onClick={() => router("/profile")}>Profile</p>
                <p style={{ cursor: "pointer" }} onClick={addCart}>Products</p>
                <p style={{ cursor: "pointer" }} onClick={goCart}>Cart</p>
                <div style={{ display: "flex" }}>
                    {
                        user?.email ?
                            <p onClick={logout} style={{ padding: "7px 20px", cursor: "pointer" }}>Logout</p>
                            : <p onClick={() => router('/login')} style={{ padding: "7px 20px", cursor: "pointer" }}>Login</p>

                    }
                </div>
            </div>




        </div>
    )
}

export default Navbar;