export default function ModalLogout(){

    return(
        <div className="flex justify-center items-center h-screen w-full bg-bgModal ">

            <div className="w-[556px] h-[241px] flex flex-col gap-[23px] items-center pt-[39px] pl-[45px] pr-10 pb-7 rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Sair da Conta</h1>
                <p className="text-xl font-light text-black">Deseja realmente sair da conta?</p>
                <div className="flex gap-1 mt-[29px]">
                    <button className="w-[164px] h-11 rounded-lg bg-primary text-black border-primary border-[1px] font-normal text-base">Sim</button>
                    <button className="w-[164px] h-11 rounded-lg bg-white text-primary border-primary border-[1px] font-normal text-base">Não</button>
                </div>
            </div>
        </div>
    )
}