import { createContext } from "react";




const TodoItemfromContext=createContext({
    todoItem:[],
    addNewItem:()=>{},
    deleteItem:()=>{}
})
export default TodoItemfromContext;
