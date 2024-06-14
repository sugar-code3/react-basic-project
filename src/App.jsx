import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addItems/AddTodo";
import TodHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  let Todolist = [
    {
      Name: " Go to collage ",
      date: "14/01/2024 ",
    },
    { 
      Name: " Take a bath", 
      date: "15/01/2024 " 
    },
  ];

  return (
    <center className="todo-container">
      <div className="items-container">
        <TodHeading></TodHeading>
        <AddTodo></AddTodo>
        <TodoItems todoItems={Todolist}></TodoItems>
      </div>
    </center>
  );
}

export default App;
