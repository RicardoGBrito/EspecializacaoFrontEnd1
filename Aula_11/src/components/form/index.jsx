export default function Form(props){

    const{formData, setFormData} = props;
    
    /* function salvarDados(){
        localStorage.setItem('titulo',formData.titulo)
        localStorage.setItem('data',formData.data)
        localStorage.setItem('valor',formData.valor)
        localStorage.setItem('tipo',formData.tipo)
        localStorage.setItem('descricao',formData.descricao)

    } */

return(
    <div className="flex flex-col">
        <h3>Preencha os campos abaixos para adicionar um item</h3>
        
        <input 
        className="w-[564px] h-[55px] bg-[#d9d9d9]"
        type="text" value={formData?.titulo} placeholder="Título" onChange={(event)=>setFormData({... formData, titulo:event.target.value})}/>
        <input type="date" value={formData?.data} placeholder="Data" onChange={(event)=>setFormData({... formData, data:event.target.value})}/>
        <input type="number" value={formData?.valor} placeholder="Valor" onChange={(event)=>setFormData({... formData, valor:event.target.value})}/>
        <select value={formData?.tipo} placeholder="Tipo" onChange={(event)=>setFormData({... formData, tipo:event.target.value})}>
            <option>Green</option>
            <option>Red</option>
        </select>
        <input type="text" value={formData?.descricao} placeholder="Descrição" onChange={(event)=>setFormData({... formData, descricao:event.target.value})}/>
        <button onClick={window.reload}>Salvar</button>
        

    </div>

)

}