import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext({})

const MyProvider = ({children}) => {

    const navigate = useNavigate()
    const [userMail, setUserMail] = useState("")

    useEffect(() => {
        const response = localStorage.getItem("email")
        if(response){
            setUserMail(response)

        }
    },[])
    
    function logout(){
        localStorage.clear()
        navigate('/login')
    }

    function changeUserMail(email){
        setUserMail(email)
        localStorage.setItem("email", email)
    }

    return(
        <MyContext.Provider value={{userMail, changeUserMail, logout}}>{children}</MyContext.Provider>
    )
}

export default MyProvider;