import { useState } from 'react'
import RoutesConfig from './components/mesa1/routesConfig'
import ToDo from './components/mesa2/pages/toDo'
import Form from './components/mesa3/components/form'
import Table from './components/mesa3/components/table'






function App() {
  
  const [formData, setFormData] = useState({
    id:'',
    nome:'',
    matricula:'',
    curso:'',
    bimestre:''
  })

  function clearForm(){
    setFormData({
      id:'',
      nome:'',
      matricula:'',
      curso:'',
      bimestre:''
    })
  }
  return(
    <>
      {/* <RoutesConfig/> */}
      {/* <ToDo/> */}
      <Form formData={formData} setFormData={setFormData} clearForm={clearForm}/>

      <Table formData={formData} setFormData={setFormData} clearForm={clearForm}/>
    
    </>
  )
}

export default App
