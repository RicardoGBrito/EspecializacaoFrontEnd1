import { useQuery } from "@tanstack/react-query";
import Card from "../card";
import { cardProduto } from "../interfaces";
import Navbar from "../navbar";
import { getProduto } from "../service/requests/requests";

export default function Home(){
    const {data} = useQuery(["@produto"], getProduto)

    console.log(data.data)
    return(
        <>
            <Navbar/>
            <div className="flex flex-col gap-[18px] pl-[62px] pt-[45px] font-Poppins">
                <h1 className="text-xl font-semibold text-black">Produtos</h1>
                <div className="flex gap-[37px] flex-wrap">
                    {
                        data?.data.map((item:cardProduto, index:number)=>(
                            <Card key={index} nome={item.nome} preco={item.preco} fornecedor={item.fornecedor} url_imagem={item.url_imagem}/>
                        ))
                    }

                </div>
            </div>
        </>
    )
}