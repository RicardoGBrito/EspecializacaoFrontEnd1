import { useState, useEffect } from "react"
import axios from "axios";
import './App.css'

import Produto from './components/mesa1/produto'
/* O useEffect monitora qualquer alteração que for feita no array de dependência. Ele sempre executa a primeira vez,
mesmo que não tenha nada. Se não tiver o array de dependência, ele fica de olho em qualquer alteração na página */


function App() {

  const [produtos, setProdutos] = useState([])
  
  useEffect(()=>{
    getProdutos()
  },[])

  async function getProdutos(){
    const response = await axios.get('https://dummyjson.com/products')

    console.log(response.data.products)

    setProdutos(response.data.products)

  }

  {/* <p key={item.id}>{item.title}</p> */}

  {/* <Produto key={item.id} value={item}/> */}

  return (
    
    <main className="container-main">
      <div className="container-main-header">
        <h1 className="container-main-title">Shop Products</h1>

      </div>
      <div className="container-main-body">
        {produtos.map((item)=>(
          <Produto key={item.id} value={item}/>
          
          ))}
      </div>

    </main>

    
  )
}

export default App
