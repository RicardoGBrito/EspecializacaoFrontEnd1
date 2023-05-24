export const getAluno = async () => {
    
    const resposta = await fetch("https://api-aluno.vercel.app/aluno")
    const resposta2 = await resposta.json()

    console.log(resposta2)
    return resposta2

}


export const editAluno = async (body) => {

    const options ={
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }

    fetch(`https://api-aluno.vercel.app/aluno/${body.id}`, options).then(response => response.json())

}

export const saveAluno = async (body) =>{
    const options ={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }

    fetch('https://api-aluno.vercel.app/aluno',options).then(response => response.json())

}

export const deleteAluno = async (id) =>{
    const options ={
        method: 'DELETE',
    }

    fetch(`https://api-aluno.vercel.app/aluno/${id}`, options).then(response => response.json())

}