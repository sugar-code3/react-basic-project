
import { useContext } from "react";
import style from "../components/TodoItems.module.css";
import TodoItem from "./TodoItem";
import TodoItemfromContext from "../store/todo-context";


const TodoItems = () => {
  const {todoItem}=useContext(TodoItemfromContext)
  return (
    <div className={style.items}>
      {todoItem.map((item, index) => (
        <TodoItem
          key={index}
          tododate={item.duedate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
