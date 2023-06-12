import { cardProduto } from "../interfaces";

export default function Card({nome, preco, fornecedor, url_imagem}:cardProduto){

    return(
        <div className="w-[225px] h-[261] min-w-[225px] flex flex-col p-[15px] rounded-lg bg-white font-Poppins border-[#e4e4e4] border-[1px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-base font-semibold text-black h-12 mb-[10px]">{nome}</h1>
                <img className="w-[93px] h-[92px] mb-7" src={url_imagem}/>

            </div>
            <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-light text-black">{fornecedor}</p>
                <p className="text-2xl font-light text-black">R${preco}</p>

            </div>
        </div>
    )
}