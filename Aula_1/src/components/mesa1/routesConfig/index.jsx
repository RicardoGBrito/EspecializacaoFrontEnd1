import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import DetalhesProduto from '../pages/detalhesProduto'

export default function RoutesConfig() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produto' element={<Home/>}/>
                <Route path='/produto/:idProd' element={<DetalhesProduto/>}/>
                <Route path='*' element={<DetalhesProduto/>}/>


            </Routes>
        
        </BrowserRouter>
    )

}