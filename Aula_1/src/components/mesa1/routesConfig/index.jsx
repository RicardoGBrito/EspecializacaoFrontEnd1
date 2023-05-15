import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import DetalhesProduto from '../pages/detalhesProduto'
import Layout from '../components/layout'
import Login from '../pages/login'
import MyProvider from '../context'

export default function RoutesConfig() {

    return(
        <BrowserRouter>
            <MyProvider>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/produto/:idProd' element={<DetalhesProduto/>}/>

                    </Route>


                </Routes>
            
            </MyProvider>
        </BrowserRouter>

    )

}