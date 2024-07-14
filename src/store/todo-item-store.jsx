
import {useReducer } from "react";
import TodoItemfromContext from "./todo-context";


const todoItemReducer=(currtodoItem, action)=>{

    let newTodoItem=currtodoItem;
    if(action.type==="NEW_ITEM"){
       newTodoItem=[...currtodoItem,{
        name:action.payload.ItemName,
        duedate: action.payload.Itemdate
       }];
    }
    else if(action.type==="DELETE_ITEM"){
      newTodoItem=currtodoItem.filter((item)=>
      item.name!==action.payload.ItemName);
    }
  return newTodoItem;
  }

  const TodoItemContext=({children})=>{

    
  const [todoItem, dispatchTodoItem]=useReducer(todoItemReducer, []);

  const addNewItem = (ItemName, Itemdate) => {
      const newItemaction={
        type:"NEW_ITEM",
        payload:{
          ItemName,
          Itemdate
        }
      }
      dispatchTodoItem(newItemaction);
  };

  const deleteItem = (todoitemnme) => {
     const deleteItemaction={
      type:"DELETE_ITEM",
      payload:{
        ItemName:todoitemnme
      }
     }
     dispatchTodoItem(deleteItemaction);
  };

  return (
    <TodoItemfromContext.Provider value={
        {
          todoItem,
          addNewItem,
          deleteItem
        }
      }>
      {children}
      </TodoItemfromContext.Provider>
  );
  }

  export default TodoItemContext;