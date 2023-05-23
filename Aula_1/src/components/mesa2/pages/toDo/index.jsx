import { useEffect, useState } from "react"
import Card from "../../components/card"
import {useQuery, useQueryClient} from '@tanstack/react-query'
import {apiGet} from "../../services/request"

export default function ToDo(){
    const [dadosTarefas, setDadosTarefas] = useState({titulo:"", categoria:"", data:null, descricao:""})
    /* const [tarefas, setTarefas] = useState([]) */
    const queryClient = useQueryClient()

    /* useEffect(()=>{
        fetch("https://api-todo-six.vercel.app/todo")
        .then(response=>response.json())
        .then(response=>setTarefas(response))
    },[])
 */
    function cadastrarTarefas(){
        const options = {
            method:"POST",
            body: {
                title:dadosTarefas.titulo,
                date:dadosTarefas.data
                
            }
        }
        fetch("https://api-todo-six.vercel.app",options)
        .then(response=>console.log(response))
    }

    const {data} = useQuery(["@toDos"], apiGet, {refetchOnWindowFocus:false} )

    console.log(data)
    return(
        
        <main className="container-main">
            <div className="container-card">

                <div className="container-card-cadastro">
                    <h3>Cadastrar Tarefas</h3>
                    <input type="text" placeholder="Título" onChange={(event=>setDadosTarefas({...dadosTarefas, titulo: event.target.value}))}></input>
                    <select name="Categoria" onChange={(event=>setDadosTarefas({...dadosTarefas, categoria: event.target.value}))}>
                        <option value="Trabalho" >Trabalho</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Prioridades" >Prioridades</option>
                        <option value="Outros">Outros</option>
                    </select>
                    <input type="date" placeholder="Data" onChange={(event=>setDadosTarefas({...dadosTarefas, data: event.target.value}))}></input>
                    <input type="text" placeholder="Descrição" onChange={(event=>setDadosTarefas({...dadosTarefas, descricao: event.target.value}))}></input>
                    <button onClick={cadastrarTarefas}>Salvar</button>
                </div>
            </div>
            <div className="container-tarefas">
                <h1>Minhas Tarefas</h1>
                {
                    data.map((item, index) =>(
                        <ul>
                            <li key={index}>{item}</li>
                        </ul>
                    ))
                    /* tarefas.map(item=>(
                        <Card key={item.id} value={item}/>
                    )) */
                }
            </div>

        
        </main>
        
    )
}