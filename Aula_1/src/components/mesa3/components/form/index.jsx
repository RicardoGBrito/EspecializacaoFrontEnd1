import { useState } from "react"
import {useQueryClient, useQuery} from "@tanstack/react-query"
import {getCursos} from "../../requests/cursos"

export default function Form(){

    const [formData, setFormData] = useState({
        nome:'',
        matricula:'',
        curso:'',
        bimestre:''
    })

    const queryClient = useQueryClient()

    const {data} = useQuery(["@cursos"], getCursos)

    console.log(data)

    return(

        <div>
            <input 
            value={formData.nome}
            placeholder="Nome" 
            onChange={(event=>setFormData({... formData, nome:event.target.value}))}/>
            <input 
            value={formData.matricula}
            placeholder="Matrícula" 
            onChange={(event=>setFormData({... formData, matricula:event.target.value}))}/>
            <select onChange={(event=>setFormData({... formData, curso:event.target.value}))}>
                {data?.cursos.map((curso)=>(
                    <option key={curso.id}>{curso.name}</option>
                ))}
            </select>
            <input
            value={formData.bimestre}
            placeholder="Bimestre" 
            onChange={(event=>setFormData({... formData, bimestre:event.target.value}))}/>
            <button>Salvar</button>
        </div>


    )
}