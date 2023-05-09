import { useState, useEffect } from "react"

/* O useEffect monitora qualquer alteração que for feita no array de dependência. Ele sempre executa a primeira vez,
mesmo que não tenha nada. Se não tiver o array de dependência, ele fica de olho em qualquer alteração na página */


function aula1() {
  
  const [numero, setNumero] = useState(10)

  useEffect(() =>{
    alert("executei")
  },[numero]);

  async function getAlgo(){
    const response = await axios.get("")
  }

  function increment(){
    //qdo precisar pegar um estado anterior, pode-se fazer dessa forma, por causa do tempo de atuação do react.
    /* setNumero((previous) => previous+1)
    setNumero((previous) => previous+1)
    setNumero((previous) => previous+1) */
    setNumero(numero+1)
  }

  return (
    <>
      <h1>{numero}</h1>
      <button onClick={increment}>Incrementar</button>

    </>
  )
}

export default App
