import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams} from 'react-router-dom'
import DetalheProdutoCard from '../../components/detalheProdutoCard'
import './style.css'
import Produto from "../../components/produto"

export default function DetalhesProduto(){
    
    
    const [prodList, setProdList] = useState([])    
    const [produto, setProduto] = useState([])
    const params = useParams()
    console.log(params.idProd)
    
    
    function getRandomId(prodList){
        
        const productRemovedList = prodList.splice(params.idProd-1,1)
        
        
        for(let i=prodList.length-1; i>0; i--){
            const j = Math.floor(Math.random() *(i+1))
            const k = prodList[i]
            prodList[i] = prodList[j]
            prodList[j] = k
            
        }
        
        
        const randomProductList = prodList.slice(0,4)
                
        setProdList(randomProductList)
        
        
    }
    
    
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.idProd}`)
        .then(response => response.json())
        .then(data=>setProduto(data))
        
        
        fetch(`https://dummyjson.com/products`)
        .then(response => response.json())
        .then(data => getRandomId(data.products))
    },[params.idProd])
    
    console.log(produto)
    
    return(
        <main className="detalhe-container-main">
            
            <div >
                
                {<DetalheProdutoCard key={produto.id} value={produto}/>}


            </div>
            <h1 className="detalhe-container-text">Veja outros produtos</h1>
            <div className="detalhe-container-cards">
                {
                    prodList.map(item =>(
                        <Link to={`/produto/${item.id}`} style={{textDecoration:'none'}}>
                            <Produto key={item.id} value={item}/>
                        
                        </Link>
                    ))
                }
            </div>

            

        </main>
        

    )
}