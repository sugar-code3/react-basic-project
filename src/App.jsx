import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addItems/AddTodo";
import TodHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  return (
    <center className="todo-container">
      <div className="items-container">
        <TodHeading />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </center>

  );
}

export default App;
