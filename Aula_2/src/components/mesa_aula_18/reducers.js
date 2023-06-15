const State = {
    tarefas:[
        /* {
            titulo:"Academia",
            categoria:"Lazer",
            data:"25/07/2023",
            descricao:"Manter o corpo em forma."
        }, */
        
    ]
    
}


export const tarefasReducer =((state = State, action)=>{
    
    const copyState = {...state}
    
    switch (action.type){
        case "ADD_TAREFA":
            
            copyState.tarefas.push(action.payload.tarefas)
            return{
                ...copyState,
            }
            case "APAGAR_TAREFA":          
            
            copyState.tarefas.splice(copyState.tarefas.indexOf(action.payload.tarefas), 1)
            return{
                ...copyState,
            }
        case "LIMPAR_TAREFAS":
            return {
                ...state, tarefas:[]
            }
        default:
            return state
    } 
        

})