import NavBar from "../navBar"
import { Outlet, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "../../context"

export default function Layout(){

    /* const navigate = useNavigate()
    const mail = localStorage.getItem("email")

    if(mail){
        navigate("/")
    }else{
        navigate("/login")
    } */

    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )

}