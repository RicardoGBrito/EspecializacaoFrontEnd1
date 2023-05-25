import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import "./index.css"

//Instanciando um objeto da classe QueryClient
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  //O provider precisa do atributo client para poder iniciar.
  <QueryClientProvider client={client}>
    <App />

  </QueryClientProvider>
  
)
