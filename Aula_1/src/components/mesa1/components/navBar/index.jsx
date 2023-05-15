import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context'
import './style.css'

export default function NavBar(){

    
    const {userMail,logout} = useContext(MyContext)
    

    return(
        <div className="container-main-header">
            <h1 className="container-main-title">Shop Products</h1>

            <div className="container-main-user">
                <p className="container-main-user-mail">{userMail}</p>
                <button className="container-main-user-logout" onClick={logout}>Sair</button>
            </div>

        </div>
    )
}