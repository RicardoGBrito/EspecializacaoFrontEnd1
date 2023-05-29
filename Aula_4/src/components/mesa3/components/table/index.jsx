import { useMutation, useQuery, useQueries, useQueryClient } from "@tanstack/react-query"
import { deleteAluno, getAluno } from "../../services/requests/alunos"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Table(props){

    const queryClient = useQueryClient()
    const {formData, setFormData, clearForm} = props

    
    const { data, isFetching } = useQuery(["@alunos"], getAluno,{
        refetchOnWindowFocus: false,

    })
   

    const {mutate} = useMutation(deleteAluno,{
        onSuccess:()=>{queryClient.invalidateQueries(["@alunos"])}
    
    })

    const tamanhoArray = Array.isArray(data)?data.length:0

    if(isFetching){
        return <h3>Carregando...</h3>
    }

    function editar(item){
        
        setFormData({ ...item, id:item._id})
    }
  

    function deletar(id){
        mutate(id)
        clearForm()
    }

    return(
        <div className="mt-10">
            <div className="flex justify-between mb-7">
                <h1 className="font-Poppins font-medium text-white text-xl">Alunos Cadastrados</h1>
                <h1 className="font-Poppins font-light text-white text-xl">Total de alunos: {tamanhoArray}</h1>

            </div>
            <table className="w-[1596px]">
                <thead>

                    <tr className="grid-rows-1 grid-col-1 font-Poppins text-white text-lg border-y-[0.5px] border-[#858587] h-10 ">
                        <th className="font-medium">Ordem</th>
                        <th className="font-medium">Nome</th>
                        <th className="font-medium">Curso</th>
                        <th className="font-medium">Matrícula</th>
                        <th className="font-medium">Bimestre</th>
                        <th className="font-medium">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        data?.map((item, idx)=>{
                                                       
                            
                            return (
                            
                            <tr className="font-Poppins font-light text-white text-lg text-center border-b-[0.5px] border-[#858587] h-10" key={idx} >
                                <td>{idx+1}</td>
                                <td>{item.nome}</td>
                                <td>{item.matricula}</td>
                                <td>{item.curso}</td>
                                <td>{item.bimestre}</td>
                                <td>
                                    <EditIcon className="text-[#0fba3f] mr-2 cursor-pointer"  onClick={()=>editar(item)}/>
                                    <DeleteForeverIcon className="text-[#f90000] cursor-pointer" onClick={()=>deletar(item._id)}/>

                                </td>
                            </tr>
                        )})
                    }

                </tbody>
                
            </table>

        </div>
    )
}