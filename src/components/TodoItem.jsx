import React from "react";
import style from "../components/TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todoName, tododate, ondeleteitem, setchangestate }) => {
  const ondeleteitems = (todoitemnme) => {
    setchangestate((currdeleteValue)=>
      currdeleteValue.filter(
        (item) => item.name !== todoitemnme
      ))
  };
  return (
    <div className={style.todoitems}>
      <div className={style.itemname}>{todoName}</div>
      <div className={style.itemdate}>{tododate} </div>
      <div className={style.deleteitem}>
        <button
          type="button"
          className="btn btn-danger kg-btn "
          onClick={() => ondeleteitems(todoName)}
        >
          <AiFillDelete className="b1" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
