import { useState } from "react"
import { useEffect } from "react"
import { useParams} from 'react-router-dom'
import TitleBar from "../../components/titleBar"
import DetalheProdutoCard from '../../components/detalheProdutoCard'
import './style.css'

export default function DetalhesProduto(){

    const [produto, setProduto] = useState([])
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.idProd}`)
        .then(response => response.json())
        .then(data=>setProduto(data))
    },[params.idProd])

    console.log(produto)
    return(
        <>
            
            <main className="container-main">
                <TitleBar/>
                <DetalheProdutoCard value={produto}/>


            </main>

        </>
        

    )
}