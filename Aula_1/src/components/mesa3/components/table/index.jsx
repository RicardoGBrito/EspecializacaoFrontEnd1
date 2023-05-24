import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteAluno, getAluno } from "../../services/requests/alunos"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

export default function Table(props){

    const queryClient = useQueryClient()
    const {formData, setFormData, clearForm} = props

    const [ count, setCount] = useState(0)
    const { data } = useQuery(["@alunos"], getAluno,{
        refetchOnWindowFocus: false,

    })

    const {mutation} = useMutation(deleteAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    console.log(data)

    function editar(item){
        alert(JSON.stringify(item))
        setFormData({ ...item, id:item._id})
    }

    /* function contador(){
        
    } */

    function deletar(id){
        mutation(id)
        clearForm()
    }

    return(
        <>
            <div>
                <h1>Alunos Cadastrados</h1>
                <h1>Total de alunos: {count}</h1>

            </div>
            <table>
                <thead>

                    <tr>
                        <th>Ordem</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Matrícula</th>
                        <th>Bimestre</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        data?.map((item, idx)=>(
                            <tr key={idx} >
                                <td>{idx}</td>
                                <td>{item.nome}</td>
                                <td>{item.matricula}</td>
                                <td>{item.curso}</td>
                                <td>{item.bimestre}</td>
                                <td>
                                    <EditIcon  onClick={()=>editar(item)}/>
                                    <DeleteForeverIcon onClick={()=>deletar(item._id)}/>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                
            </table>

        </>
    )
}