import { useState } from "react"
import Login from "../interfaces"

export default function Form(){


    const [login, setLogin] = useState<Login>({
        email: '',
        senha: ''
    })

    return(
        <div className="bg-primary w-full h-screen flex items-center justify-center font-Poppins">

            <div className="flex flex-col w-[463px] h-[388px] px-10 py-8 gap-5 bg-white rounded-xl justify-center items-center">
                <h1 className="text-xl font-bold text-black">Login</h1>
                <p className="text-base font-light text-black">Entre com seus dados corretamente para acessar o sistema</p>
                <input
                className="w-96 h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 mb-1 font-light text-[15px]" 
                type="text" 
                placeholder="Digite seu email" 
                value={login.email} 
                onChange={(event)=>setLogin({... login, email:event.target.value})}/>
                <input 
                className="w-96 h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 mb-3 font-light text-[15px]"
                type="password" 
                placeholder="Digite sua senha" 
                value={login.senha} 
                onChange={(event)=>setLogin({... login, senha:event.target.value})}/>
                <button className="w-96 h-11 rounded-lg bg-primary text-black border-primary border-[1px] pl-4 mb-1 font-normal text-base">Entrar</button>
            </div>          
        </div>
    )
}