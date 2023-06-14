

const State = {
    products:[],
        
    user: "",
    login: ""
}

export default function ProductsReducer(state=State, action) {

    if(action.type === "ADD_PRODUCT"){
        const copyState = {... state}
        copyState.products.push({ ...action.payload.product, id: Date.now() });

        return { ...copyState };
      }
    
      if (action.type === "CLEAR_LIST") {
        return {
          ...state,
          products: [],
        };
      }
    
      if(action.type === "CLEAR_ITEM"){
        
        const copyState = {... state}
        
        console.log(action.payload.product)
        const index = copyState.products.indexOf(action.payload.product)
        
        copyState.products.splice(index, 1);
        return{
            ... copyState
        }
      }

    return state
}