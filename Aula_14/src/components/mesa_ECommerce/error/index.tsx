import linkedin from "../assets/icons/linkedin.svg"
import facebook from "../assets/icons/facebook.svg"

export default function ErrorPage(){

    return(
        <div className="flex h-screen w-full font-Poppins text-black">
            <div className="w-[376px] h-full bg-primary flex justify-center items-center">
                <h1 className="text-3xl font-semibold">Ooooopss.</h1>
            </div>
            <div className="bg-white flex flex-col ml-[74px] mt-[59px] ">
                <h1 className="text-xl font-semibold mb-[193px]">Página não encontrada</h1>
                <p className="text-xl font-light mb-[39px]">Não encontramos essa página em nosso sistema. 
                Verifique se voceê inseriu a url corretamente. </p>
                <p className="text-xl font-medium mb-[160px]">Clique aqui para voltar a página inicial </p>
                <div className="flex gap-[35px] justify-center">
                    <img className="w-[50px] h-[50px]" src={linkedin}/>
                    <img className="w-[50px] h-[50px]" src={facebook}/>
                </div>
            </div>
        </div>
    )
}