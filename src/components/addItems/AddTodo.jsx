import InputTask from "./InputTask";
import AddDueDate from "./AddDueDate";
import AddButton from "./AddButton";
import { useContext, useRef } from "react";
import style from "../addItems/AddTodo.module.css";
import TodoItemfromContext from "../../store/todo-item-store";

function AddTodo() {
  const {addNewItem}=useContext(TodoItemfromContext)
  const todoElement = useRef();
  const duedateElement = useRef();

  const onClickItem = (event) => {
     event.preventDefault();
    const todoName = todoElement.current.value;
    const toddate = duedateElement.current.value;

    if (todoName == "" || toddate == "") {
      alert("Enter list Item and date");
    } else {
      addNewItem(todoName, toddate);
      todoElement.current.value = "";
      duedateElement.current.value = "";
    }
  };

  return (
    <form className={style.addtodo}  onSubmit={onClickItem}>
      <InputTask AddItem={todoElement}></InputTask>
      <AddDueDate AddDate={duedateElement}></AddDueDate>
      <AddButton />
    </form>
  );
}
export default AddTodo;
