import { useState } from "react"
import menuIcon from "../../assets/icons/menu.svg"

export default function NavBar(){

    const [showMenu, setShowMenu] = useState(false)

    function mostrarMenu(){
        if(showMenu){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
    }

    return(

        <nav className="bg-navColor flex justify-between h-[133px] w-full font-ubuntu items-center">
            <h1 className="text-white text-3xl ml-24 sm:text-4xl">DigiWallet</h1>
            <div className="text-white mr-[107px] text-2xl hidden sm:flex">
                <p className="mr-[42px]">Home</p>
                <p>Sobre</p>
            </div>
            <img src={menuIcon} onClick={mostrarMenu} className="h-3 mr-[42px] cursor-pointer sm:hidden"/>
            <div className={`text-white absolute w-full bg-navColor top-[133px] text-xl flex-col ${showMenu?'flex':'hidden'} menu-animation sm:hidden`}>
                <p className="border-t-[1px] pl-4 py-2">Home</p>
                <p className="border-t-[1px] pl-4 py-2">Sobre</p>
            </div>

        </nav>

    )
}

