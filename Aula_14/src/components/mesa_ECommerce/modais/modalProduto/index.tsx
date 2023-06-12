export default function ModalProduto(){

    return(
        <div className="flex justify-center items-center h-screen w-full bg-bgModal ">

            <div className="w-[556px] h-[534px] flex flex-col gap-[23px] items-center pt-[39px] pl-[45px] pr-10 pb-7 rounded-xl bg-white">
                <h1 className="text-xl font-semibold text-black">Cadastrar Produto</h1>
                <input
                className="w-[471px] h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 font-light text-[15px]" 
                type="text" 
                placeholder="Nome do Produto"/>
                <div className="flex gap-3">
                    <input 
                    className="w-[229px] h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 font-light text-[15px]"
                    type="text" 
                    placeholder="Preço do Produto"/>
                    <select 
                    className="w-[233px] h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 font-light text-[15px] text-inputTextColor">
                        <option hidden>Fornecedores</option>
                    </select>

                </div>
                <input 
                className="w-[471px] h-11 rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 font-light text-[15px]"
                type="text" 
                placeholder="Url da Imagem"/> 
                <textarea
                className="w-[471px] h-[133px] rounded-lg bg-input placeholder-inputTextColor border-inputBorderColor border-[1px] pl-4 font-light text-[15px] placeholder:absolute placeholder:top-3 pt-3" 
                placeholder="Descrição"/>
                <div className="flex gap-1">
                    <button className="w-[164px] h-11 rounded-lg bg-primary text-black border-primary border-[1px] font-normal text-base">Salvar</button>
                    <button className="w-[164px] h-11 rounded-lg bg-white text-primary border-primary border-[1px] font-normal text-base">Cancelar</button>
                </div>
            </div>
        </div>
    )
}