import React, { useContext } from "react";
import style from "../components/TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai";
import TodoItemfromContext from "../store/todo-item-store";

const TodoItem = ({ todoName, tododate }) => {
  const {deleteItem}=useContext(TodoItemfromContext)

  return (
    <div className={style.todoitems}>
      <div className={style.itemname}>{todoName}</div>
      <div className={style.itemdate}>{tododate} </div>
      <div className={style.deleteitem}>
        <button
          type="button"
          className="btn btn-danger kg-btn "
          onClick={()=> deleteItem(todoName)}
        >
          <AiFillDelete className="b1" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
