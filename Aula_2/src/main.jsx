import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import { tarefasReducer } from './components/mesa_aula_18/reducers.js'
import "./index.css"

const store = createStore(
    combineReducers({
        tarefas: tarefasReducer
    })
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>

    </Provider>
)
