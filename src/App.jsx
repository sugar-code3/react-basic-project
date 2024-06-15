import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addItems/AddTodo";
import TodHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import "./App.css";
import {useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const intialtodoItem = [];
  const [todoItem, settodoItem] = useState(intialtodoItem);
  const handleAddItem = (ItemName, Itemdate) => {
    settodoItem((currvalue)=> [...currvalue,
        {
          name: ItemName, duedate: Itemdate,
        },
      ] )


  };
  return (
    <center className="todo-container">
      <div className="items-container">
        <TodHeading></TodHeading>
        <AddTodo onAddItem={handleAddItem}></AddTodo>
        <WelcomeMessage itemlist={todoItem}></WelcomeMessage>
        <TodoItems todoItems={todoItem} settodoitem={settodoItem}></TodoItems>
      </div>
    </center>
  );
}

export default App;
