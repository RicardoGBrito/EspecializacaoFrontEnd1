import RoutesConfig from './components/mesa1/routesConfig'
import './App.css'

/* O useEffect monitora qualquer alteração que for feita no array de dependência. Ele sempre executa a primeira vez,
mesmo que não tenha nada. Se não tiver o array de dependência, ele fica de olho em qualquer alteração na página */


function App() {

  return(
    <RoutesConfig/>
  )
}

export default App
