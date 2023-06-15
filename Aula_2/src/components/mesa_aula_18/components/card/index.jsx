/* eslint-disable react/prop-types */
import trash from "../../assets/icons/FiTrash2.svg"

export default function Card(props) {

    function reduzirContagemTarefas(){

        props.setCount(props.count-1)
        props.dispatch({type:"APAGAR_TAREFA", payload:{tarefas:props.value}})

    }

    return(
        <div className="flex justify-between p-5 mb-7 border-[#c7c4c4] border-[1px] rounded-xl">
            <div className="flex flex-col ">
                <h2 className="text-xl text-[#343434] font-semibold">{props.value.titulo}</h2>
                <div className="flex flex-col relative bottom-[6px]">
                    <h5 className="text-sm text-[#343434] font-light">{props.value.categoria}</h5>
                    <p className="relative top-2 text-base text-[#343434] font-light">{props.value.descricao}</p>

                </div>
            </div>
            <div className="flex flex-col justify-center items-end gap-5">
                <h2 className="text-xl text-[#343434] font-semibold">{props.value.data}</h2>
                <button onClick={reduzirContagemTarefas}><img src={trash}/></button>
            </div>
        </div>
    )
}