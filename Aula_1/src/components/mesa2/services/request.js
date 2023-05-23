
export const apiGet = async()=>{
    
   const response = await fetch("https://api-todo-six.vercel.app/todo")
    
    
    return response.json();

    
}

