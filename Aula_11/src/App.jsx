import { useState } from "react"
import Form from "./components/form"
import NavBar from "./components/navbar"


function App() {
  
  const [formDados, setFormDados] = useState({
    titulo:"",
    data:null,
    valor:null,
    tipo:"",
    descricao:""
  })

  return (
    <div className="flex flex-col">
      <NavBar/>
      <div>
        <Form formDados={formDados} setFormDados={setFormDados}/>
      </div>
    </div>
  )
}

export default App
