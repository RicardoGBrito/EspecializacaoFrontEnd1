import { useState } from "react"
import {useQueryClient, useQuery, useMutation} from "@tanstack/react-query"
import {getCursos} from "../../services/requests/cursos"
import { editAluno, saveAluno } from "../../services/requests/alunos"

export default function Form(props){

    const {formData, setFormData, clearForm} = props

    const queryClient = useQueryClient()

    const {data} = useQuery(["@cursos"], getCursos)

    const {mutate} = useMutation(saveAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    const {mutate: editMutate} = useMutation(editAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    console.log(data)

    function editar(){
        editMutate({
            id: formData.id,
            nome: formData.nome,
            matricula: formData.matricula,
            curso: formData.curso,
            bimestre: formData.bimestre,
          })
        clearForm()
    }

    function salvar(){
        mutate({
            nome: formData.nome,
            matricula: formData.matricula,
            curso: formData.curso,
            bimestre: formData.bimestre,
          })
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
            <select value={formData.curso} onChange={(event=>setFormData({... formData, curso:event.target.value}))}>
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