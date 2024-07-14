import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoItemContext from './store/todo-item-store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TodoItemContext>
    <App />
    </TodoItemContext>
  </React.StrictMode>,
)
