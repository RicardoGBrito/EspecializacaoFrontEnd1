import { useState } from "react"
import {useQueryClient, useQuery, useMutation} from "@tanstack/react-query"
import {getCursos} from "../../services/requests/cursos"
import { editAluno, saveAluno } from "../../services/requests/alunos"

export default function Form(props){

    const {formData, setFormData, clearForm} = props

    const queryClient = useQueryClient()

    const {data} = useQuery(["@cursos"], getCursos)

    const {mutation} = useMutation(saveAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    const {mutation: editMutation} = useMutation(editAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    console.log(data)

    function editar(){
        editMutation(formData)
        clearForm()
    }

    function salvar(){
        mutation(formData)
        clearForm()

    }

    

    return(

        <div>
            <h1>Diário eletrônico</h1>
            <input 
            value={formData.nome}
            placeholder="Nome" 
            onChange={(event=>setFormData({... formData, nome:event.target.value}))}/>
            <input 
            value={formData.matricula}
            placeholder="Matrícula" 
            onChange={(event=>setFormData({... formData, matricula:event.target.value}))}/>
            <select onChange={(event=>setFormData({... formData, curso:event.target.value}))}>
                <option hidden>Selecione uma opção</option>
                {data?.cursos.map((curso)=>(
                    <option key={curso.id}>{curso.name}</option>
                ))}
            </select>
            <input
            value={formData.bimestre}
            placeholder="Bimestre" 
            onChange={(event=>setFormData({... formData, bimestre:event.target.value}))}/>
            <button onClick={formData.id? editar : salvar}>Salvar</button>
        </div>


    )
}