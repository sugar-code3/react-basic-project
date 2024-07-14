import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addItems/AddTodo";
import TodHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import "./App.css";
import {useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemfromContext from "./store/todo-item-store";

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
function App() {

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
    <center className="todo-container">
      <div className="items-container">
        <TodHeading/>
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems/>
      </div>
    </center>
    </TodoItemfromContext.Provider>
  );
}

export default App;
