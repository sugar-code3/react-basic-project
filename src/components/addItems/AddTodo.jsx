import InputTask from "./InputTask";
import AddDueDate from "./AddDueDate";
import AddButton from "./AddButton";
import { useState } from "react";
import style from "../addItems/AddTodo.module.css"

function AddTodo({ onAddItem }) {
  const   [todoName, setTodoName] = useState("");
  const  [toddate, setTododate] = useState("");

  const handleOnAdd = (event) => {
    setTodoName( event.target.value);
  };

  const handleOnDate = (event) => {
    setTododate( event.target.value) ;
  };

  const onClickItem = () => {
    onAddItem(todoName, toddate);
    setTodoName("");
    setTododate("");
  };

  return (
    <div className={style.addtodo}>
      <InputTask value={todoName} AddItem={handleOnAdd} ></InputTask>
      <AddDueDate  value={toddate} AddDate={handleOnDate}></AddDueDate>
      <AddButton clickItem={onClickItem}></AddButton>
    </div>
  );
}
export default AddTodo;
