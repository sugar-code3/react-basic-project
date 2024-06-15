import InputTask from "./InputTask";
import AddDueDate from "./AddDueDate";
import AddButton from "./AddButton";
import { useRef } from "react";
import style from "../addItems/AddTodo.module.css";

function AddTodo({ onAddItem }) {
  const todoElement = useRef();
  const duedateElement = useRef();

  const onClickItem = () => {
    const todoName = todoElement.current.value;
    const toddate = duedateElement.current.value;
    todoElement.current.value = "";
    duedateElement.current.value = "";
    if (todoName == "" || toddate == "") {
      alert("Enter list Item and date");
    } else {
      onAddItem(todoName, toddate);
    }
  };

  return (
    <div className={style.addtodo}>
      <InputTask AddItem={todoElement}></InputTask>
      <AddDueDate AddDate={duedateElement}></AddDueDate>
      <AddButton clickItem={onClickItem}></AddButton>
    </div>
  );
}
export default AddTodo;
