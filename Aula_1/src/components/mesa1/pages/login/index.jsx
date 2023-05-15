import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MyContext } from "../../context"
import "./style.css"

export default function Login(){

    const {changeUserMail} = useContext(MyContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email:"", password:""})

    function logar(){
        changeUserMail(formData.email)
        navigate('/')
    }

    return(
        <div className="login-container">
            <h1 className="login-container-title">Shop Products</h1>
            <div className="login-container-content">
                <h1 className="login-container-content-title">Login</h1>
                <h3 className="login-container-content-text">Insira seus dados para entrar no sistema</h3>
                <input type="email" placeholder="E-mail" 
                value={formData.email}
                onChange={event => setFormData({...formData, email: event.target.value})}
                ></input>
                <input type="password" placeholder="Senha"
                value={formData.password}
                onChange={event => setFormData({...formData, password: event.target.value})}
                ></input>
                <button className="btn-login" onClick={logar} >Entrar</button>
            </div>
            <p className="login-container-text">Todos os direitos reservados | 2023</p>
        </div>
    )
}