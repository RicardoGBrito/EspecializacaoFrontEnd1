import NavBar from "../navBar"
import { Outlet, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "../../context"

export default function Layout(){

    const navigate = useNavigate()
    const {userMail} = useContext(MyContext)
    if(userMail){
        navigate("/")
    }else{
        navigate("/login")
    }

    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )

}