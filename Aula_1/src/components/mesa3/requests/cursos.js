export const getCursos = async ()=>{
    
    const response = await fetch("https://api-aluno.vercel.app/cursos")
    const response_1 = await response.json()
    return response_1
        
}

/* export const getCursos = ()=>{
    
    return fetch("https://api-aluno.vercel.app/cursos").then(response => response.json())
    .then(response => response)
        
} */



 

/* API: https://api-aluno.vercel.app/ 

cursos
Get =>  /cursos 

aluno
Get =>  /aluno 

Post => /aluno 
body: {
	  nome: string,
 	 matricula: string

	 curso: string,
 	 bimestre: string
} 

Delete => /aluno/{id} 

Put => /aluno/{id} 
 body: {
	  nome: string,
 	 matricula: string

	 curso: string,
 	 bimestre: string 
} */
