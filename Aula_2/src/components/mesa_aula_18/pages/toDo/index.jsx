import Card from "../../components/card"
import {useSelector, useDispatch} from "react-redux"
import { useState } from "react"


export default function ToDo(){
    const [dadosTarefas, setDadosTarefas] = useState({titulo:"", categoria:"", data:"", descricao:""})
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const {tarefas} = useSelector((state)=> state.tarefas)
    
    function contarTarefas(){
        setCount(count+1)
        dispatch({type:"ADD_TAREFA", payload:{tarefas:dadosTarefas}})
        
    }

    function zerarTarefas(){
        setCount(0)
        dispatch({type:"LIMPAR_TAREFAS"})
    }
    
    return(
        
        <main className="flex w-full h-full font-poppins">
            <div className="flex bg-[#102766] min-w-[482px] w-[482px] min-h-screen justify-center items-start pt-20">

                <div className="flex flex-col w-[343px] h-[568px] bg-white rounded-xl justify-center items-center gap-10">
                    <h3 className="font-semibold text-base text-[#343434] ">Cadastrar Tarefas</h3>
                    <input
                    value={dadosTarefas.titulo}
                    className="placeholder-[#545454] text-[15px] w-[286px] border-b-[1px] border-[#450b53] py-[6px] pl-[6px]"
                    type="text" 
                    placeholder="Título"                     
                    onChange={(event=>setDadosTarefas({...dadosTarefas, titulo: event.target.value}))}></input>
                    <select 
                    value={dadosTarefas.categoria}
                    className="placeholder-[#545454] text-[15px] w-[286px] border-b-[1px] border-[#450b53] py-[6px] pl-[6px]"
                    name="Categoria" 
                    onChange={(event=>setDadosTarefas({...dadosTarefas, categoria: event.target.value}))}>
                        <option  hidden >Categoria</option>
                        <option value="Trabalho" >Trabalho</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Prioridades" >Prioridades</option>
                        <option value="Outros">Outros</option>
                    </select>
                    <input 
                    value={dadosTarefas.data}
                    className="placeholder-[#545454] text-[15px] w-[286px] border-b-[1px] border-[#450b53] py-[6px] pl-[6px]"
                    type="date"                    
                    placeholder="Data" 
                    onChange={(event=>setDadosTarefas({...dadosTarefas, data: event.target.value}))}></input>
                    <input 
                    value={dadosTarefas.descricao}
                    className="placeholder-[#545454] text-[15px] w-[286px] border-b-[1px] border-[#450b53] py-[6px] pl-[6px]"
                    type="text" 
                    placeholder="Descrição" 
                    onChange={(event=>setDadosTarefas({...dadosTarefas, descricao: event.target.value}))}></input>
                    <div className="flex flex-col gap-3 ">
                        <button 
                        className="bg-[#e84118] w-[287px] h-[52px] rounded-lg text-white"
                        onClick={contarTarefas}>Salvar</button>
                        <button 
                        className="bg-[#e84118] w-[287px] h-[52px] rounded-lg text-white"
                        onClick={zerarTarefas}>Limpar lista</button>

                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[71px] mx-12 mb-2 gap-7 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#343434] text-2xl font-semibold">Minhas Tarefas</h1>
                    <p className="text-base font-light text-[#343434]">Total: {count} tarefas</p>
                </div>
                <ul>
                    {
                        tarefas.map((item, index) =>{
                            
                            return <li key={index} ><Card value={item} dispatch={dispatch} count={count} setCount={setCount}/></li>
                        })
                            
                    }
                </ul>
            </div>

        
        </main>
        
    )
}