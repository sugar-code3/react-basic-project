import React, { useContext } from 'react'
import TodoItemfromContext from '../store/todo-context'

const WelcomeMessage = () => {
  const {todoItem}=useContext(TodoItemfromContext)
  return (
    todoItem.length==0 &&<h1 className='welcomemessage'>Enjoy your day</h1>
  )
}

export default WelcomeMessage