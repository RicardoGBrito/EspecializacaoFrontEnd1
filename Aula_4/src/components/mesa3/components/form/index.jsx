import { useState } from "react"
import {useQueryClient, useQuery, useMutation} from "@tanstack/react-query"
import {getCursos} from "../../services/requests/cursos"
import { editAluno, saveAluno } from "../../services/requests/alunos"


export default function Form(props){

    const {formData, setFormData, clearForm} = props

    const queryClient = useQueryClient()

    const {data} = useQuery(["@cursos"], getCursos)

    const {mutate} = useMutation(saveAluno,{
        onSuccess:()=>{
            
        queryClient.invalidateQueries(["@alunos"])}
    
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
        <>
            <h1 className="font-Poppins font-bold text-white text-2xl mb-10">Diário eletrônico</h1>
            <div className="flex gap-10">
                <input 
                className="w-96 h-11 py-2 pl-8 rounded-xl font-Poppins font-light text-lg text-[#00081d] placeholder-[#00081d]"
                value={formData.nome}
                placeholder="Nome" 
                onChange={(event=>setFormData({... formData, nome:event.target.value}))}/>
                <input
                className="w-[246px] h-11 py-2 pl-8 rounded-xl font-Poppins font-light text-lg text-[#00081d] placeholder-[#00081d]"
                value={formData.matricula}
                placeholder="Matrícula" 
                onChange={(event=>setFormData({... formData, matricula:event.target.value}))}/>
                <select 
                className="w-[365px] h-11 py-2 pl-8 rounded-xl font-Poppins font-light text-lg text-[#00081d] placeholder-[#00081d]"
                value={formData.curso} 
                onChange={(event=>setFormData({... formData, curso:event.target.value}))}>
                    <option hidden>Selecione uma opção</option>
                    {data?.cursos.map((curso)=>(
                        <option key={curso.id}>{curso.name}</option>
                    ))}
                </select>
                <input
                className="w-[246px] h-11 py-2 pl-8 rounded-xl font-Poppins font-light text-lg text-[#00081d] placeholder-[#00081d]"
                value={formData.bimestre}
                placeholder="Bimestre" 
                onChange={(event=>setFormData({... formData, bimestre:event.target.value}))}/>
                <button
                className="w-[200px] h-11 py-2 rounded-xl font-Poppins font-normal text-lg text-white bg-[#1a2edf] text-center" 
                onClick={formData.id? editar : salvar}>Salvar</button>
            </div>
        
        </>


    )
}