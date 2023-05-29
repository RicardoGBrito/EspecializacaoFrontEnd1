import { useState } from 'react'
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
    <div className="px-16 pt-12 bg-[#1e1e1e] w-[1731px] h-[1117px]">
      
      <Form  formData={formData} setFormData={setFormData} clearForm={clearForm}/>

      <Table formData={formData} setFormData={setFormData} clearForm={clearForm}/>
    
    </div>
  )
}

export default App
