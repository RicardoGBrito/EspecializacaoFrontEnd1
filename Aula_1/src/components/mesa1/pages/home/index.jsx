import { useState, useEffect } from "react"
import axios from "axios";
import './style.css'
import TitleBar from "../../components/navBar"
import {Link} from "react-router-dom"

import Produto from '../../components/produto'

export default function Home(){

    
    const [produtos, setProdutos] = useState([])
  
  useEffect(()=>{
    getProdutos()
  },[])

  async function getProdutos(){
    const response = await axios.get('https://dummyjson.com/products')

    console.log(response.data.products)

    setProdutos(response.data.products)

  }

  return (
    
    <main className="container-main">
      
      <div className="container-main-body">
        {produtos.map((item)=>(
            <Link to={`/produto/${item.id}`} style={{textDecoration:'none'}}>
              <Produto key={item.id} value={item} />

            </Link>
          
          ))}
      </div>

    </main>

    
  )
}