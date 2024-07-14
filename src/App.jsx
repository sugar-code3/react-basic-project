import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addItems/AddTodo";
import TodHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import "./App.css";
import {useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemfromContext from "./store/todo-item-store";
function App() {
  const [todoItem, settodoItem] = useState([]);

  const addNewItem = (ItemName, Itemdate) => {
    settodoItem((currvalue)=> [...currvalue,
        {
          name: ItemName, duedate: Itemdate,
        },
      ] )
  };

  const deleteItem = (todoitemnme) => {
    settodoItem((currdeleteValue)=>
      currdeleteValue.filter(
        (item) => item.name !== todoitemnme
      ))
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
